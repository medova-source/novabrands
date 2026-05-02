import FormatPage from "@/components/FormatPage";
import gummies from "@/assets/cat-gummies.jpg";
import capsules from "@/assets/cat-capsules.jpg";
import powders from "@/assets/cat-powders.jpg";
import liquids from "@/assets/cat-liquids.jpg";
import tablets from "@/assets/cat-tablets.jpg";

export const Gummies = () => (
  <FormatPage data={{
    format: "Gummies",
    tagline: "The format consumers actually finish.",
    description: "Pectin and gelatin gummy systems with low-sugar, allulose and sugar-free options. Custom shapes, sour or sanded coatings, layered and center-filled designs.",
    heroImage: gummies,
    customization: [
      { label: "Ingredients", description: "Vitamins, botanicals, nootropics, mushrooms, hemp, sleep & beauty actives." },
      { label: "Flavor", description: "Natural and naturally-flavored systems with masking science for tough actives." },
      { label: "Shape", description: "Custom 3D molds — bears, hearts, branded geometries, layered and 3D forms." },
      { label: "Packaging", description: "Bottles, pouches, blister packs, gift cartons and child-resistant formats." },
    ],
    packaging: ["HDPE bottles", "PCR bottles", "Stand-up pouches", "Stick packs", "Blister cards", "CR child-resistant", "Tin cans", "Gift cartons"],
    qualityNote: "Every gummy run is verified for active potency, water activity, microbiological purity and heavy-metal compliance, with full stability programs to protect your brand and your shelf life.",
  }} />
);

export const Capsules = () => (
  <FormatPage data={{
    format: "Capsules",
    tagline: "Precision dosing with a clinical feel.",
    description: "Vegetarian (HPMC), gelatin, liquid-fill and beadlet capsules. From simple two-piece encapsulation to delayed-release and specialty multi-active formats.",
    heroImage: capsules,
    customization: [
      { label: "Ingredients", description: "Single-active, complex stacks, oils, probiotics, enzymes and botanicals." },
      { label: "Capsule Type", description: "HPMC, gelatin, pullulan, enteric-coated and liquid-fill softgels." },
      { label: "Size", description: "00 through 4 — including animal-free and acid-resistant variants." },
      { label: "Packaging", description: "Bottles, blister packs, sachets, dispensers and trial-size formats." },
    ],
    packaging: ["HDPE bottles", "Glass amber bottles", "Cold-form blisters", "PCR pouches", "Travel tins", "CR closures"],
    qualityNote: "Capsule production runs against tight weight-variation, dissolution and disintegration specs — with finished-product identity and potency assays on every batch.",
  }} />
);

export const Tablets = () => (
  <FormatPage data={{
    format: "Tablets",
    tagline: "The most versatile format on Earth.",
    description: "Coated, layered, chewable, effervescent and orally disintegrating tablets. From high-dose single-active to multi-actives with proprietary release profiles.",
    heroImage: tablets,
    customization: [
      { label: "Ingredients", description: "Vitamins, minerals, botanicals, amino acids, electrolytes and clinical actives." },
      { label: "Tablet Type", description: "Film-coated, sugar-coated, chewable, effervescent, ODT and bilayer." },
      { label: "Shape", description: "Round, oval, oblong, custom embossing, debossing and branded scoring." },
      { label: "Packaging", description: "Bottles, blisters, tubes, sachets and travel-format options." },
    ],
    packaging: ["HDPE bottles", "Cold-form blisters", "Effervescent tubes", "Sachets", "PCR bottles", "Pharma-grade closures"],
    qualityNote: "Tablets are validated for hardness, friability, weight variation, dissolution and content uniformity — with full process validation on every new SKU.",
  }} />
);

export const Powders = () => (
  <FormatPage data={{
    format: "Powders",
    tagline: "Mix-ability you can taste.",
    description: "Agglomerated and instantized powder systems for protein, electrolyte, greens, beauty and functional categories. Stick packs, jars and bulk.",
    heroImage: powders,
    customization: [
      { label: "Ingredients", description: "Protein, collagen, electrolytes, pre/probiotics, greens, mushrooms, nootropics." },
      { label: "Flavor & Sweetener", description: "Natural flavor systems with stevia, allulose, monk fruit and sugar-based options." },
      { label: "Format", description: "Single-serve sticks, multi-serve scoops, bulk pouches and jar systems." },
      { label: "Packaging", description: "Stick packs, sachets, jars, pouches with degassing valves and tubs." },
    ],
    packaging: ["Stick packs", "PE/PET sachets", "PCR jars", "Stand-up pouches", "HDPE tubs", "Custom scoops & scoop-locks"],
    qualityNote: "Powder runs are verified for moisture, particle size, blend uniformity, sensory and microbiological purity — with allergen-segregated production where required.",
  }} />
);

export const Liquids = () => (
  <FormatPage data={{
    format: "Liquids",
    tagline: "Bioavailable, beautiful, shelf-stable.",
    description: "Aqueous and oil-based liquid systems — tinctures, shots, syrups, sprays and dropper bottles. Built to taste good, stay stable, and survive the supply chain.",
    heroImage: liquids,
    customization: [
      { label: "Ingredients", description: "Botanicals, hemp, vitamins, minerals, nootropics, beauty and immunity actives." },
      { label: "Format", description: "Tinctures, shots, syrups, oils, sprays and dropper bottles." },
      { label: "Sweetener System", description: "Natural sugars, stevia, allulose, monk fruit — with masking and mouthfeel work." },
      { label: "Packaging", description: "Glass amber, PCR PET, dropper assemblies, fin-seal packs and sachets." },
    ],
    packaging: ["Glass amber bottles", "PCR PET bottles", "Dropper assemblies", "Single-serve shots", "Fin-seal sachets", "Spray pumps"],
    qualityNote: "Every liquid system is validated for stability, microbial limits, pH, viscosity and taste profile — with accelerated and real-time stability programs.",
  }} />
);
