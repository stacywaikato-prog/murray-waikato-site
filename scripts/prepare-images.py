#!/usr/bin/env python3
"""Crop phone-screenshot letterbox bars, export responsive webp + manifest.
usage: prepare-images.py <uploads_dir> <site_dir>"""
import sys, json
from pathlib import Path
from PIL import Image
import numpy as np

SRC = {  # id -> original file prefix
 "pierced-panel":"ead1729d","toki-river-stones":"42b24e08","hei-tiki-backlit":"2818ab38",
 "pounamu-slab-river":"e0565624","toki-pendants-pair":"79c4d25a","pendant-earring-set":"336536ab",
 "hei-tiki-layout-slab":"1a2ed2a7","boxed-toki-pendants":"2edc173e","wip-silhouette":"cee9e792",
 "layout-studies":"483824cd","workbench-axe":"ad086025","haft-detail":"7fbc25db",
 "workbench-axe-low-light":"f37cdfb6","timber-blade-hedge":"5281f8d9","named-piece":"3118056c",
 "crescent-pendants":"5810e964","plinth-form":"bfbde807",
 # batch 2
 "tiki-paua-earrings":"417f2cbd","pectoral-boxed":"9c2dcf13","blue-slab-light":"eb101e02",
 "stone-blanks":"d48156ed","pectoral-sunlit":"353a7be5","blue-lashed-pendant":"7a8ed7e9",
 "blue-mere-feathers":"700d6c51","blue-tiki-gears":"d67873c3","blue-tiki-held":"f27b03ae",
 "feathered-blade-tree":"04ee8832","beach-lineup":"765b6a6d","boxed-taonga-set":"ebaf0825",
 "rakau-in-progress":"5351bf03","beach-staff":"cdb6873c",
 # batch 3
 "reiputa-whalebone":"eaf9f7a0",
 # batch 4
 "boxed-pale-earrings":"9087f673","mere-arahura":"fcd289fc","curved-pendant-toggle":"29f8a90d",
 "heart-set":"c4cbf157","purple-stone-close":"d7ab0e48","purple-toki-cord":"4629f7c8",
 "axe-hedge":"18e20cd3","bone-earrings-slab":"7f22289b","red-club-feathers":"ea2bc15f",
 "half-moon-pendant":"3f716fb5","axe-bone-handle":"45e23ded","timber-spiral-form":"84367da8",
 "hei-tiki-wet":"828d1611","face-cog-inlays":"0f4b834a",
 # batch 5
 "hafted-toki-feathers":"0b607984","club-turquoise":"507b1682","green-carved-form":"fca9305c",
}
# pixel crops applied before bar removal (phone screenshots with status bars)
PRE = {"reiputa-whalebone": (0, 224, 720, 1380)}
# fractional crops (x0,y0,x1,y1) applied after bar removal
BOX = {
 "pectoral-sunlit": (0.03, 0.02, 0.97, 0.65),   # top panel of a collage
 "pectoral-boxed": (0.0, 0.16, 1.0, 0.92),      # drop car tail-light above, grass below
 "stone-blanks": (0.0, 0.0, 1.0, 0.70),
 "tiki-paua-earrings": (0.0, 0.27, 1.0, 1.0),
 "purple-stone-close": (0.0, 0.0, 1.0, 0.58),
 "hei-tiki-wet": (0.07, 0.12, 0.90, 0.97),
 "timber-spiral-form": (0.0, 0.20, 1.0, 0.80),
 "green-carved-form": (0.12, 0.0, 0.96, 1.0),
 "boxed-taonga-set": (0.03, 0.05, 0.93, 0.79),     # drop empty box lid         # drop vehicle cover logo
}
up, site = Path(sys.argv[1]), Path(sys.argv[2])
out = site/"public/img"; out.mkdir(parents=True, exist_ok=True)

def crop_bars(im):
    a = np.asarray(im.convert("L"))
    rows = a.max(axis=1) > 10
    cols = a.max(axis=0) > 10
    y0, y1 = np.argmax(rows), len(rows)-np.argmax(rows[::-1])
    x0, x1 = np.argmax(cols), len(cols)-np.argmax(cols[::-1])
    # trim a few extra px where a bar was removed (compression fringe)
    if y0: y0 += 4
    if y1 < len(rows): y1 -= 4
    if x0: x0 += 4
    if x1 < len(cols): x1 -= 4
    return im.crop((x0, y0, x1, y1))

SKIP = {"named-piece"}  # withheld until Murray confirms consent: never written to public/
manifest = {}
for id_, pre in SRC.items():
    if id_ in SKIP: continue
    im = Image.open(up/f"{pre}-image.jpg").convert("RGB")
    if id_ in PRE: im = im.crop(PRE[id_])
    im = crop_bars(im)
    if id_ in BOX:
        fx0, fy0, fx1, fy1 = BOX[id_]; W0, H0 = im.size
        im = im.crop((round(W0*fx0), round(H0*fy0), round(W0*fx1), round(H0*fy1)))
    w, h = im.size
    widths = sorted({x for x in (480, 800, 1200) if x < w} | {w})
    for tw in widths:
        th = round(h*tw/w)
        im.resize((tw, th), Image.LANCZOS).save(out/f"{id_}-{tw}.webp", "WEBP", quality=82, method=6)
    c = im.resize((1,1), Image.LANCZOS).getpixel((0,0))
    manifest[id_] = {"w": w, "h": h, "color": "#%02x%02x%02x" % c, "widths": widths}
    print(id_, (w,h), widths)
(site/"src/content/image-manifest.json").write_text(json.dumps(manifest, indent=1))

# OG triptych 1200x630 (photographs only, no text)
W, H = 1200, 630
canvas = Image.new("RGB", (W, H), (15,14,12))
x = 0
for id_, share in (("timber-spiral-form", .30), ("hei-tiki-wet", .34), ("beach-lineup", .36)):
    im = Image.open(out/f"{id_}-{manifest[id_]['widths'][-1]}.webp").convert("RGB")
    tw = round(W*share); r = max(tw/im.width, H/im.height)
    im = im.resize((round(im.width*r)+1, round(im.height*r)+1), Image.LANCZOS)
    left = (im.width-tw)//2; top = (im.height-H)//2
    canvas.paste(im.crop((left, top, left+tw, top+H)), (x, 0)); x += tw
canvas.save(site/"public/og.jpg", quality=85)
