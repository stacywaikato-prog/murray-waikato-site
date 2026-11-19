import type { ImageId } from "./images";
import type { ClipId } from "./clips";

export type Work = {
  slug: string; no: string; title: string; reo?: string; material: string;
  lead: ImageId; leadPos?: string; images: ImageId[]; clips?: ClipId[]; summary: string; body: string[];
};

// Groupings are drawn from what the photographs show. Titles are descriptive and provisional.
export const works: Work[] = [
  {
    slug: "timber-forms", no: "01", title: "Timber forms", reo: "Whakairo rākau", material: "Timber",
    lead: "timber-spiral-form", leadPos: "55% 55%", images: ["timber-spiral-form", "plinth-form", "green-carved-form", "pierced-panel", "timber-blade-hedge"],
    summary: "Large carved works in timber: pierced rings, interlocked heads, spiral relief.",
    body: [
      "Five pieces, five ways of working the material. One lies on weathered logs in full sun, its broad end filled by a double spiral edged in fine notches, small heads with open mouths running along the handle. One is stained amber and surfaced in fine, layered spirals, its interlocking forms standing on a plinth made to carry it. One stands tall on a timber base, two hook forms twisting around each other with pierced rings along their edges, painted deep green and flecked white. One is a long panel where raised spirals sit above pierced rings and a single smooth curve. One is a pale tewhatewha: a broad blade with paired figures and spirals, a shaft that bends and a carved head low on the handle.",
      "In the pierced pieces, the openings matter as much as the relief: light passes through the rings.",
    ],
  },
  {
    slug: "toki-and-hafts", no: "02", title: "Toki & carved hafts", reo: "Toki me ngā kakau", material: "Timber, steel, green stone",
    lead: "haft-detail", images: ["haft-detail", "hafted-toki-feathers", "axe-bone-handle", "axe-hedge", "toki-river-stones", "wip-silhouette", "workbench-axe"],
    summary: "Hafts carved in herringbone, a timber handle with a green stone blade, and forms caught mid-making.",
    body: [
      "A long haft carved in bands of herringbone below a dark hammered steel head; above the carving, pencilled spirals and a circle wait for the chisel. A curved red-brown handle ends in a carved head, its green stone blade bound under dark feathers. Two steel heads are hafted too: one on a long, curved pale haft carved with spirals, set with a small red inlay and pierced at the end; one on timber, carved with spirals and set with a blue inlay below the head. Elsewhere, a carved timber handle lies beside a polished green stone blade in shallow river water.",
      "The workshop photographs sit beside the finished pieces: the bench, the grinder, the vice padded with a cloth, the shavings underfoot.",
    ],
  },
  {
    slug: "pounamu", no: "03", title: "Pounamu", reo: "Pounamu", material: "Green stone, pāua, cord",
    lead: "pectoral-sunlit", images: ["pectoral-sunlit", "hei-tiki-wet", "mere-arahura", "face-cog-inlays", "pectoral-boxed", "tiki-paua-earrings", "half-moon-pendant", "toki-pendants-pair", "crescent-pendants", "boxed-taonga-set", "pounamu-slab-river"],
    summary: "A hei tiki, a mere, pierced pendants, toki forms, crescents, and the stone before it is cut.",
    body: [
      "The stone runs rust red, cloud white, gold and a deep bottle green, and the pieces follow it. A pendant with long U-shaped openings glows yellow-green with the sun behind it; another, in darker stone, is split down its centre and cut through with spirals and hooks. A hei tiki, still wet, shows the stone mottled dark and light green. A mere tapers to a ridged butt; the photograph carries the words ‘Arahura Tangiwai’. A face is set with cog-shaped shell eyes, and a tiki has pāua shell for eyes. A half-moon is laced along its straight edge. Toki-form pendants are bound at the neck in black or tan cord, and crescents hang in threes.",
      "The earlier stages are here too: a slab in shallow river water, and blanks laid out in rows in the sun. Finished pieces are shown boxed, in black, in teal, or in a fitted wooden case holding a hafted toki, two mere and two pendants.",
    ],
  },
  {
    slug: "rakau", no: "04", title: "Rākau", reo: "Rākau", material: "Timber, feather, pāua", clips: ["rakau-red-blade", "rakau-grain"],
    lead: "beach-lineup", images: ["beach-lineup", "beach-staff", "red-club-feathers", "club-turquoise", "feathered-blade-tree", "timber-blade-hedge", "rakau-in-progress"],
    summary: "Taiaha and tewhatewha with feather tassels and pāua, photographed on a gravel beach.",
    body: [
      "Five rākau stand upright in the gravel at the water’s edge: taiaha with carved heads, one with pāua eyes and pale feathers at its neck, a tewhatewha with its broad blade, and a long blade covered in fine incised pattern with dark feathers tied below the head. Another taiaha stands alone under a clear sky. A pale tewhatewha leans against a tree, a speckled feather hanging from it. Close up, two taiaha heads: one stained deep red, its face set with inlaid eyes beneath a burst of dark red feathers; the other with the carving of its tongue picked out in turquoise.",
      "On the bench, five taiaha lie side by side in woods that run from deep purple-red to pale: heads carved on some, only outlines drawn on others.",
    ],
  },
  {
    slug: "light-through-stone", no: "05", title: "Light through stone", material: "Translucent blue stone, pāua, cord, feather", clips: ["saw-blue-stone"],
    lead: "blue-tiki-gears", images: ["blue-tiki-gears", "blue-tiki-held", "blue-mere-feathers", "blue-lashed-pendant", "blue-slab-light"],
    summary: "Translucent blue stone, held to a light: a tiki with cog-shaped eyes, a patu, a lashed pendant, an uncut slab.",
    body: [
      "Held to a light, this stone turns deep blue with white cloud running through it. A tiki has cog-shaped inlays for eyes and small inlaid dots at its joints. A patu in the mere shape is held upright, feathers tied at the grip. A rounded pendant has notched edges and brown cord lashed through a row of holes along its top. A tapered slab is held up before it is shaped.",
      "Every photograph here is taken against the light, because that is where the stone does its work.",
    ],
  },
  {
    slug: "drawing-and-layout", no: "06", title: "Drawing & layout", reo: "Te tuhi", material: "Ink on stone",
    lead: "hei-tiki-backlit", images: ["hei-tiki-layout-slab", "layout-studies", "hei-tiki-backlit"],
    summary: "Tiki figures drawn directly onto stone, then shaped, pierced and held to the light.",
    body: [
      "Before the cut, the line. Figures are inked straight onto the stone, in one case through a clear film, with small crosses marked near the edges. Slabs sit side by side at different stages of drawing.",
      "The last photograph in this group shows a pierced form held up to a workshop lamp, glowing at its thinnest edges.",
    ],
  },
];
