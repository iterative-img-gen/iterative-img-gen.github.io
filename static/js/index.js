window.HELP_IMPROVE_VIDEOJS = false;

// var INTERP_BASE = "./static/interpolation/stacked";
// var NUM_INTERP_FRAMES = 240;

// var interp_images = [];
// function preloadInterpolationImages() {
//   for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
//     var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
//     interp_images[i] = new Image();
//     interp_images[i].src = path;
//   }
// }

// function setInterpolationImage(i) {
//   var image = interp_images[i];
//   image.ondragstart = function() { return false; };
//   image.oncontextmenu = function() { return false; };
//   $('#interpolation-image-wrapper').empty().append(image);
// }

const MODEL_COLUMNS = [
  { name: "Qwen-Image", key: "qwen" },
  { name: "GPT", key: "gpt" },
  { name: "NanoBanana", key: "nano" },
  { name: "Iter-Refine (ours)", key: "ours" },
];

const SAMPLE_ROWS = [
  
  {
    prompt: "Four ducks are standing on the ground, and a tiny pink giraffe is standing in front of them holding a bottle with a ship inside it. Five novels are placed on the ground behind the ducks. The image is in a cartoon style.",
    images: {
      qwen: "./static/assets2/1/qwen.png",
      gpt: "./static/assets2/1/gpt.png",
      nano: "./static/assets2/1/gemini.png",
      ours: "./static/assets2/1/ours.png",
    },
    imageNotes: {
      qwen: "Novels placed in front of the ducks.",
      gpt: "Novels placed in front of the ducks.",
      nano: "Incorrect number of novels.",
      ours: "Aligned to prompt.",
    },
    imageNoteStatus: {
      ours: "success",
    },
    reasoningTrace: [
      {
        comment: "Four ducks are standing on the ground, and a tiny pink giraffe is standing in front of them holding a bottle with a ship inside it. Five novels are placed on the ground behind the ducks. The image is in cartoon style.",
        image: "./static/assets2/1/step_0.png",
      },
      {
        comment: "Move the five novels from in front of the ducks to behind them, ensuring they are placed on the ground in the background while keeping all other elements in their correct positions.",
        image: "./static/assets2/1/step_1.png",
      },
      {
        comment: "Edit the image to make space behind the ducks for novels, ensuring they are placed on the ground in the background while keeping all other elements in their correct positions.",
        image: "./static/assets2/1/step_2.png",
      },
      {
        comment: "Add one more novel behind the ducks, ensuring there are five novels in total and preserving the overall composition.",
        image: "./static/assets2/1/step_3.png",
      },
      {
        comment: "Edit the bottle held by the giraffe to have only a single knob, and ensure the entire image is in a cartoon style.",
        image: "./static/assets2/1/step_4.png",
      },
    ],
  },
  {
    prompt: "A warm, animated-cartoon New Year’s night city scene viewed from street level, with tall buildings and a clear sky where fireworks spell “2026.” In the background, a stone clock tower clearly shows 12:00 at midnight. High up in one of the buildings, a large apartment window several floors above the street glows warmly: two adults hug, one adult holds a champagne glass, and a young boy and a young girl stand at the window with hot chocolate in their hands and pointing at fireworks. Down on the street below, a lively parade crowd cheers and jumps as confetti and streamers fill the air beneath glowing streetlights and a festive banner across the avenue; in the crowd, a parent lifts a child onto their shoulders and the child points up at the fireworks, a couple takes a selfie with the fireworks above them, and someone laughs with eyes closed while confetti is caught in their hair. Clean outlines, bright festive colors, simple shading, cinematic composition, and a joyful yet slightly reflective holiday mood.",
    images: {
      qwen: "./static/assets2/6/qwen.png",
      gpt: "./static/assets2/6/gpt.png",
      nano: "./static/assets2/6/gemini.png",
      ours: "./static/assets2/6/ours.png",
    },
    imageNotes: {
      qwen: "Improper rendering and missing entities such as young boy on window.",
      gpt: "Incorrect wall time, children not pointing to fireworks.",
      nano: "Incorrect wall time, children not pointing to fireworks, missing child on shoulders.",
      ours: "Aligned to prompt.",
    },
    imageNoteStatus: {
      ours: "success",
    },
    reasoningTrace: [
      {
        comment: "A warm, animated-cartoon New Year’s night city scene viewed from street level, with tall buildings and a clear sky where fireworks spell..., and a joyful yet slightly reflective holiday mood.",
        image: "./static/assets2/6/step_0.png",
      },
      {
        comment: "Add a young boy standing at the window alongside the girl with both holding hot chocolate, ensuring both children are pointing at the fireworks while preserving the joyful mood and cinematic composition of the scene.",
        image: "./static/assets2/6/step_1.png",
      },
      {
        comment: "Add a young boy clearly visible on the window ledge alongside the girl with both holding hot chocolate, and pointing at the fireworks.",
        image: "./static/assets2/6/step_2.png",
      },
      {
        comment: "Make the 2026 in fireworks clearly visible in the sky while keeping all other details of the scene intact.",
        image: "./static/assets2/6/step_3.png",
      },
      {
        comment: "Edit the wall clock time to exactly show 12:00 with hour and minute hands both pointing to twelve on clock. Maintain the cinematic composition and festive mood of the scene.",
        image: "./static/assets2/6/step_4.png",
      },
    ],
  },
  {
    prompt: "A woman sits at a table, typing on a red laptop. A black chicken with a glass-like texture stands next to her. A large spider hangs from the ceiling above them. The image has an impressionist style.",
    images: {
      qwen: "./static/assets/2/qwen.png",
      gpt: "./static/assets/2/gpt.png",
      nano: "./static/assets/2/gemini.png",
      ours: "./static/assets/2/ours.png",
    },
    imageNotes: {
      qwen: "Low aesthetic for impressionist style.",
      gpt: "Chicken not with glass-like texture.",
      nano: "Chicken not with glass-like texture.",
      ours: "Aligned to prompt.",
    },
    imageNoteStatus: {
      ours: "success",
    },
    reasoningTrace: [
      {
        comment: "A woman sits at a table, typing on a red laptop. A black chicken with a glass-like texture stands next to her. A large spider hangs from the ceiling above them. The image has an impressionist style.",
        image: "./static/assets/2/step_0.png",
      },
      {
        comment: "Refine the black chicken standing next to the woman on the table, ensuring it has a reflective, glass-like, jewel-like texture, while maintaining the impressionist style of the overall scene.",
        image: "./static/assets/2/step_1.png",
      },
      {
        comment: "Edit the black chicken on the table to clearly display a highly reflective, faceted, glass-like or crystalline texture, making it look like a black jewel sculpture, while preserving the impressionistic style of the surrounding scene.",
        image: "./static/assets/2/step_2.png",
      },
    ],
  },
  
  {
    prompt: "A cozy Christmas Eve bedroom scene where a single child sits on their bed writing a Christmas wishlist in a notebook, holding a pencil in their right hand; exactly three gifts are written clearly on the wishlist, each on its own line: “red bicycle,” “astronomy telescope,” and “wooden train set.” Above the child’s head, a large transparent thought bubble shows the child’s imagination: Santa Claus placing presents under a decorated Christmas tree, with exactly three wrapped gifts beneath the tree that correspond to the wishlist items, where only the bicycle gift has a gold ribbon and the other two have red ribbons; Santa is mid-motion, bending forward with one hand touching a gift and the other holding a sack. Outside the thought bubble, the real bedroom contains no Santa or gifts. In the background, outside the bedroom door, two parents peek in from the hallway, visible only from the shoulders up, smiling softly, while remaining fully outside the room; warm, cinematic Christmas lighting emphasizes the contrast between imagination and reality.",
    images: {
      qwen: "./static/assets2/4/qwen.png",
      gpt: "./static/assets2/4/gpt.png",
      nano: "./static/assets2/4/gemini.png",
      ours: "./static/assets2/4/ours.png",
    },
    imageNotes: {
      qwen: "Items misspelled and wrong ribbon binding.",
      gpt: "Items misspelled and incorrect number of gifts under tree.",
      nano: "Items not clearly written on wishlist.",
      ours: "Aligned to prompt.",
    },
    imageNoteStatus: {
      ours: "success",
    },
    reasoningTrace: [
      {
        comment: "A cozy Christmas Eve bedroom scene where a single child sits on their bed writing a Christmas wishlist in a notebook, .... ; warm, cinematic Christmas lighting emphasizes the contrast between imagination and reality.",
        image: "./static/assets2/4/step_0.png",
      },
      {
        comment: "Move the five novels from in front of the ducks to behind them, ensuring they are placed on the ground in the background while keeping all other elements in their correct positions.",
        image: "./static/assets2/4/step_1.png",
      },
      {
        comment: "Edit the image to make space behind the ducks for novels, ensuring they are placed on the ground in the background while keeping all other elements in their correct positions.",
        image: "./static/assets2/4/step_2.png",
      },
      {
        comment: "Add one more novel behind the ducks, ensuring there are five novels in total and preserving the overall composition.",
        image: "./static/assets2/4/step_3.png",
      },
      {
        comment: "Edit the bottle held by the giraffe to have only a single knob, and ensure the entire image is in a cartoon style.",
        image: "./static/assets2/4/step_4.png",
      },
      {
        comment: "Edit the bottle held by the giraffe to have only a single knob, and ensure the entire image is in a cartoon style.",
        image: "./static/assets2/4/step_5.png",
      },
      {
        comment: "Edit the bottle held by the giraffe to have only a single knob, and ensure the entire image is in a cartoon style.",
        image: "./static/assets2/4/step_6.png",
      },
    ],
  },
 
   
  {
    prompt: "A wide cinematic landscape where a glacier gradually melts into open savannah. On the icy side, near blue ice and drifting snow, four animals stand in a straight horizontal line: a polar bear, an arctic fox, a woolly mammoth, and a white tiger. On the grassy side, in warm sunlight, four animals stand in a matching straight horizontal line: a brown bear, a red fox, an elephant, and an orange tiger, framed by tall grass and scattered acacia trees. At the center, ice thins into wet rock and emerging grass, and each animal faces its direct counterpart across the transition—the polar bear faces the brown bear, the arctic fox faces the red fox, the woolly mammoth faces the elephant, and the white tiger faces the orange tiger. No visible barriers separate the two environments. Soft cinematic lighting, animated-movie realism, strong sense of scale, contrast, and wonder.",
    images: {
      qwen: "./static/assets2/2/qwen.png",
      gpt: "./static/assets2/2/gpt.png",
      nano: "./static/assets2/2/gemini.png",
      ours: "./static/assets2/2/ours.png",
    },
    imageNotes: {
      qwen: "Improper rendering and missing entities such as young boy on window.",
      gpt: "Incorrect wall time, children not pointing to fireworks.",
      nano: "Incorrect wall time, children not pointing to fireworks, missing child on shoulders.",
      ours: "Aligned to prompt.",
    },
    imageNoteStatus: {
      ours: "success",
    },
    reasoningTrace: [
      {
        comment: "A warm, animated-cartoon New Year’s night city scene viewed from street level, with tall buildings and a clear sky where fireworks spell..., and a joyful yet slightly reflective holiday mood.",
        image: "./static/assets2/2/step_0.png",
      },
      {
        comment: "Add a young boy standing at the window alongside the girl with both holding hot chocolate, ensuring both children are pointing at the fireworks while preserving the joyful mood and cinematic composition of the scene.",
        image: "./static/assets2/2/step_1.png",
      },
      {
        comment: "Add a young boy clearly visible on the window ledge alongside the girl with both holding hot chocolate, and pointing at the fireworks.",
        image: "./static/assets2/2/step_2.png",
      },
      {
        comment: "Make the 2026 in fireworks clearly visible in the sky while keeping all other details of the scene intact.",
        image: "./static/assets2/2/step_3.png",
      }
    ],
  },
  
  
  {
    prompt:
      "In a watercolor painting, there is a tiny broccoli, one sushi roll, a red pizza, and four cactuses. Additionally, there is a large carrot.",
    images: {
      qwen: "./static/assets/3/qwen.png",
      gpt: "./static/assets/3/gpt.png",
      nano: "./static/assets/3/gemini.png",
      ours: "./static/assets/3/ours.png",
    },
    imageNotes: {
      qwen: "Incorrect num. of cacti (2 instead of 4) and broccoli not tiny.",
      gpt: "Incorrect num. of cacti (3 instead of 4).",
      nano: "Aligned to prompt.",
      ours: "Aligned to prompt."
    },
    imageNoteStatus: {
      nano: "success",
      ours: "success",
    },
    reasoningTrace: [
      {
        comment:
          "In a watercolor painting, there is a tiny broccoli, one sushi roll, a red pizza, and four cactuses. Additionally, there is a large carrot.",
        image: "./static/assets/3/step_0.png",
      },
      {
        comment:
          "Add one more cactus to the watercolor painting so that there are exactly four cactuses in the scene, keeping the existing large carrot, tiny broccoli, one sushi roll, and red pizza.",
        image: "./static/assets/3/step_1.png",
      },
      {
        comment:
          "Add a tiny watercolor representation of broccoli to the image, ensuring it is positioned near the large carrot or sushi roll, while retaining the existing arrangement of the large carrot, one sushi roll, red pizza slice, and four cactuses.",
        image: "./static/assets/3/step_2.png",
      },
      {
        comment:
          "Remove one of the two identical columnar cactuses located on the far left side of the image, ensuring exactly four distinct cactuses remain in the scene. Preserve the existing large carrot, sushi roll, red pizza slice, and tiny broccoli.",
        image: "./static/assets/3/step_3.png",
      },
    ],
  },
  {
    prompt: "A surreal landscape split perfectly down the vertical center: on the left, a bright daytime orchard with a large apple tree bearing exactly four red apples, one of which has a bite taken out, while a single ladder leans against the tree; on the right, a moonlit night desert with exactly six glowing paper lanterns floating at different heights, where only the lowest lantern is orange and the others are white. At the center boundary stands a stone fountain split in half, with water flowing upward on the night side and downward on the day side. A lone person walks along the dividing path wearing a coat split vertically, sunlit on the left and moonlit on the right, with their shadow cast only onto the day side.",
    images: {
      qwen: "./static/assets2/3/qwen.png",
      gpt: "./static/assets2/3/gpt.png",
      nano: "./static/assets2/3/gemini.png",
      ours: "./static/assets2/3/ours.png",
    },
    imageNotes: {
      qwen: "Incorrect number of apples and man not in center of contrast.",
      gpt: "Man's shadow not on day side and on night side instead.",
      nano: "Incorrect number of lanterns.",
      ours: "Aligned to prompt.",
    },
    imageNoteStatus: {
      ours: "success",
    },
    reasoningTrace: [
      {
        comment: "A surreal landscape split perfectly down the vertical center: on the left, a bright daytime orchard with a large apple tree bearing exactly four red apples, one of which has a bite taken out, ...., sunlit on the left and moonlit on the right, with their shadow cast only onto the day side.",
        image: "./static/assets2/3/step_0.png",
      },
      {
        comment: "Refine the black chicken standing next to the woman on the table, ensuring it has a reflective, glass-like, jewel-like texture, while maintaining the impressionist style of the overall scene.",
        image: "./static/assets2/3/step_1.png",
      },
      {
        comment: "Edit the black chicken on the table to clearly display a highly reflective, faceted, glass-like or crystalline texture, making it look like a black jewel sculpture, while preserving the impressionistic style of the surrounding scene.",
        image: "./static/assets2/3/step_2.png",
      },
    ],
  },
  {
    prompt:
      "The image is a sketch showing three brown hills with a glass texture, positioned on the left side of a tree.",
    images: {
      qwen: "./static/assets/7/qwen.png",
      gpt: "./static/assets/7/gpt.png",
      nano: "./static/assets/7/gemini.png",
      ours: "./static/assets/7/ours.png",
    },
    imageNotes: {
      qwen: "Not glass textured hills.",
      gpt: "Aligned to prompt.",
      nano: "Not brown colored hills.",
      ours: "Aligned to prompt.",
    },
    imageNoteStatus: {
      gpt: "success",
      ours: "success",
    },
    reasoningTrace: [
      {
        comment:
          "The image is a sketch showing three brown hills with a glass texture, positioned on the left side of a tree.",
        image: "./static/assets/7/step_0.png",
      },
      {
        comment:
          "Refine the sketch by coloring the three glass-textured hills brown, while maintaining the overall appearance of a detailed pencil sketch. Ensure these structures look like rounded earthen mounds covered in glass texture, rather than highly stylized futuristic domes.",
        image: "./static/assets/7/step_1.png",
      },
      {
        comment:
          "Refine the three brown glass structures to emphasize their nature as low, rounded earthen mounds or natural hills covered in the segmented brown glass texture. Soften the geometric appearance slightly so they blend more naturally into the sketched landscape, ensuring they look less like highly artificial domes. Maintain the overall detailed pencil sketch aesthetic.",
        image: "./static/assets/7/step_2.png",
      },
    ],
  },
  
  {
    prompt:
      "The image features a heart-shaped giraffe, a tiny pink screwdriver, and a huge robot. The screwdriver is positioned at the bottom of the robot, touching it.",
    images: {
      qwen: "./static/assets/4/qwen.png",
      gpt: "./static/assets/4/gpt.png",
      nano: "./static/assets/4/gemini.png",
      ours: "./static/assets/4/ours.png",
    },
    imageNotes: {
      qwen: "Screwdriver not tiny and not touching robot.",
      gpt: "Giraffe and robot conflated.",
      nano: "Screwdriver not touching the robot.",
      ours: "(Failure case) Giraffe not exactly heart-shaped.",
    },
    imageNoteStatus: {
      ours: "failure",
    },
    reasoningTrace: [
      {
        comment:
          "The image features a heart-shaped giraffe, a tiny pink screwdriver, and a huge robot. The screwdriver is positioned at the bottom of the robot, touching it.",
        image: "./static/assets/4/step_0.png",
      },
      {
        comment:
          "Reposition the tiny pink screwdriver so that it is clearly touching the bottom surface of the huge robot's leg or foot.",
        image: "./static/assets/4/step_1.png",
      },
      {
        comment:
          "Ensure the tiny pink screwdriver is visibly touching and pressed against the huge robot's foot or leg structure at the very bottom, confirming direct contact.",
        image: "./static/assets/4/step_2.png",
      },
      {
        comment:
          "Introduce a tiny pink screwdriver lying on the ground, clearly touching and pressed against the lower armor plating or base structure of the huge robot's foot. Also, refine the giraffe's pose so that its neck and front legs clearly and symmetrically form a heart shape around its head.",
        image: "./static/assets/4/step_3.png",
      },
      {
        comment:
          "Refine the image to ensure the tiny pink screwdriver is clearly making physical contact with the huge robot's foot. The screwdriver should appear pressed or resting against the lowest structural plate or base of the robot's foot, eliminating any gap between the screwdriver and the metallic surface.",
        image: "./static/assets/4/step_4.png",
      },
    ],
  },
  {
    prompt:
      "A pixel art image shows a tiny pine tree with two carrots positioned in front of it. There is also a house in the scene.",
    images: {
      qwen: "./static/assets/5/qwen.png",
      gpt: "./static/assets/5/gpt.png",
      nano: "./static/assets/5/gemini.png",
      ours: "./static/assets/5/ours.png",
    },
    imageNotes: {
      qwen: "Pine tree remains large.",
      gpt: "Pine tree remains largge",
      nano: "Pine tree remains large.",
      ours: "Failure case: Carrots not directly in front of pine.",
    },
    imageNoteStatus: {
      ours: "failure",
    },
    reasoningTrace: [
      {
        comment:
          "A pixel art image shows a tiny pine tree with two carrots positioned in front of it. There is also a house in the scene.",
        image: "./static/assets/5/step_0.png",
      },
      {
        comment:
          "Edit the pixel art image by making the large pine tree significantly smaller to be tiny, while maintaining the position of the two carrots in front of it and the house in the scene.",
        image: "./static/assets/5/step_1.png",
      },
      {
        comment:
          "Edit the image to clearly show exactly two distinct, standard-sized carrots. Reposition these two carrots so they are located directly in front of the base of the tiny pine tree, and ensure the house remains in the scene.",
        image: "./static/assets/5/step_2.png",
      },
      {
        comment:
          "Edit the image to reposition the two distinct carrots so they are clearly located immediately and directly in front of the base of the tiny pine tree, ensuring the tiny pine tree and the house remain unchanged.",
        image: "./static/assets/5/step_3.png",
      },
    ],
  },
  {
    prompt:
      "An abstract image features a truck positioned lower in the scene, with a spider placed directly above it but not touching. Additionally, there is a chicken with a metallic texture present in the composition.",
    images: {
      qwen: "./static/assets/6/qwen.png",
      gpt: "./static/assets/6/gpt.png",
      nano: "./static/assets/6/gemini.png",
      ours: "./static/assets/6/ours.png",
    },
    imageNotes: {
      qwen: "Aligned to prompt but not abstract style.",
      gpt: "Aligned to prompt.",
      nano: "Spider overlaps truck.",
      ours: "Aligned to prompt.",
    },
    imageNoteStatus: {
      gpt: "success",
      ours: "success",
    },
    reasoningTrace: [
      {
        comment:
          "An abstract image features a truck positioned lower in the scene, with a spider placed directly above it but not touching. Additionally, there is a chicken with a metallic texture present in the composition.",
        image: "./static/assets/6/step_0.png",
      },
      {
        comment:
          "Refine the overall style of the image to be genuinely abstract, focusing on geometric abstraction and abstract expressionism techniques. Maintain the current composition of the truck, the metallic chicken, and the spider, ensuring they are rendered using abstract artistic styles while retaining their recognizable forms.",
        image: "./static/assets/6/step_1.png",
      },
      {
        comment:
          "Transform the image into a truly abstract composition by applying geometric abstraction and abstract expressionism principles. Keep the truck, metallic chicken, and spider in their current positions, but render them through abstract visual language while preserving their identifiable characteristics.",
        image: "./static/assets/6/step_2.png",
      },
    ],
  },
  {
    prompt:
      "The image shows a triangular-shaped dirt road, two purple apples, and a screwdriver. The screwdriver is placed on the dirt road, and one apple is on each side of the road.",
    images: {
      qwen: "./static/assets/8/qwen.png",
      gpt: "./static/assets/8/gpt.png",
      nano: "./static/assets/8/gemini.png",
      ours: "./static/assets/8/ours.png",
    },
    imageNotes: {
      qwen: "Road is not triangular.",
      gpt: "Aligned to prompt.",
      nano: "Aligned to prompt.",
      ours: "Aligned to prompt.",
    },
    imageNoteStatus: {
      ours: "success",
      nano: "success",
      gpt: "success",
    },
    reasoningTrace: [
      {
        comment:
          "The image shows a triangular-shaped dirt road, two purple apples, and a screwdriver. The screwdriver is placed on the dirt road, and one apple is on each side of the road.",
        image: "./static/assets/8/step_0.png",
      },
      {
        comment:
          "Change the color of the two apples to a vibrant purple. Also, clearly define the dirt road around the objects so that it forms a visible triangular shape.",
        image: "./static/assets/8/step_1.png",
      },
      {
        comment:
          "Clearly define the boundaries of the dirt road so that it forms a prominent triangular junction shape around the central objects (screwdriver and apples), making the triangular configuration highly visible.",
        image: "./static/assets/8/step_2.png",
      },
      {
        comment:
          "Refine the definition of the dirt road junction so that the road surfaces and boundaries clearly form a sharp, distinct triangular shape (V-fork) around the central objects (apples and screwdriver), emphasizing the visible split in the path.",
        image: "./static/assets/8/step_3.png",
      },
      {
        comment:
          "Enhance the definition of the dirt road fork. Ensure the road boundaries clearly delineate a pronounced V-shape junction, making the central ground area where the two purple apples and the screwdriver rest appear distinctly triangular, confirming the required triangle-shaped dirt road configuration.",
        image: "./static/assets/8/step_4.png",
      },
      {
        comment:
          "Finalize the triangular junction by sharpening edge contrast and keeping both purple apples and the screwdriver centered within the triangle for clarity.",
        image: "./static/assets/8/step_5.png",
      },
    ],
  },
];

// Separate data buckets so each carousel can diverge without affecting the other.
const RESULT_ROWS = SAMPLE_ROWS;
const REASONING_ROWS = JSON.parse(JSON.stringify(SAMPLE_ROWS));

const PLACEHOLDER_IMAGE = "https://placehold.co/400x400/e2e8f0/64748b?text=No+Image";

function buildTracePrefix(selector) {
  return (
    (selector || 'trace')
      .replace(/[^a-zA-Z0-9_-]/g, '') || 'trace'
  );
}

async function loadText(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error("HTTP " + response.status);
    return await response.text();
  } catch (error) {
    console.warn("[Carousel] Unable to load text", path, error);
    return null;
  }
}

function parseStepTexts(rawText) {
  return rawText
    .split(/\r?\n/)
    .map((line) => line.replace(/^\s*Step\s*\d+\s*:\s*/i, "").trim())
    .filter(Boolean);
}

function createModelCard(model, rowIndex, imageSrc, note, noteStatus) {
  const card = $('<article>').addClass('model-card');
  const figure = $('<figure>');
  const img = $('<img>')
    .attr('src', imageSrc || PLACEHOLDER_IMAGE)
    .attr('alt', `${model.name} result for prompt ${rowIndex + 1}`);

  // Add overlay
  const overlay = $('<div>').addClass('hover-overlay').html('<i class="fas fa-search-plus"></i><span>Click to view full</span>');
  figure.append(img, overlay);

  card.append(figure);

  if (note) {
    const noteEl = $('<p>')
      .addClass(`image-note ${noteStatus ? `image-note--${noteStatus}` : ""}`)
      .text(note);
    card.append(noteEl);
  }

  return card;
}

function createTracePanel(traceList, traceId, alwaysVisible = false, showHeading = true) {
  const panel = $('<div>')
    .addClass('trace-panel')
    .attr('data-visible', alwaysVisible ? 'true' : 'false')
    .attr('id', traceId);

  const heading = $('<h4>').text('Reasoning Trace');
  const steps = $('<div>').addClass('trace-steps');

  (traceList || []).forEach((step, index) => {
    const traceCard = $('<article>').addClass('trace-step');
    const figure = $('<figure>');
    const img = $('<img>')
      .attr('src', step.image || PLACEHOLDER_IMAGE)
      .attr('alt', step.stage || `Trace step ${index + 1}`);

    // Add overlay
    const overlay = $('<div>').addClass('hover-overlay').html('<i class="fas fa-search-plus"></i><span>Click to view full</span>');
    figure.append(img, overlay);

    const caption = $('<p>').html(
      `<strong>Step ${index + 1}.</strong> ${step.comment || 'Critic/refinement instruction not provided.'}`
    );

    traceCard.append(figure, caption);
    steps.append(traceCard);
  });

  if (showHeading) {
    panel.append(heading);
  }
  panel.append(steps);
  return panel;
}

async function renderDemoCarousel(selector = '#results-carousel', rows = SAMPLE_ROWS) {
  const container = $(selector);
  if (!container.length) {
    return;
  }
  container.empty();

  // Build a unique, safe prefix for IDs inside this carousel so multiple carousels
  // can coexist without clashing on element IDs.
  const tracePrefix = buildTracePrefix(selector);

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const item = $('<div>').addClass('item');
    const block = $('<div>').addClass('prompt-block');

    let promptContent = row.prompt || "Prompt unavailable.";
    let stepTextLines = null;
    if (row.promptSrc) {
      const text = await loadText(row.promptSrc);
      if (text) {
        promptContent = text.trim();
        stepTextLines = parseStepTexts(text);
      } else {
        promptContent = "Prompt unavailable.";
      }
    }

    const prompt = $('<p>')
      .addClass('prompt-text')
      .html(`<strong>Prompt:</strong> ${promptContent}`);
    block.append(prompt);

    const labels = $('<div>').addClass('row-labels');
    MODEL_COLUMNS.forEach((model) => {
      labels.append($('<span>').text(model.name));
    });
    block.append(labels);

    const grid = $('<div>').addClass('model-row');
    MODEL_COLUMNS.forEach((model) => {
      const card = createModelCard(
        model,
        i,
        row.images?.[model.key],
        row.imageNotes?.[model.key],
        row.imageNoteStatus?.[model.key]
      );
      grid.append(card);
    });
    block.append(grid);

    const traceId = `${tracePrefix}-trace-${i}`;
    const toggle = $('<button>')
      .addClass('trace-toggle')
      .attr('type', 'button')
      .attr('data-target', traceId)
      .text('Show reasoning trace');
    block.append(toggle);

    let traceList = row.reasoningTrace || [];
    if (stepTextLines?.length) {
      traceList = traceList.map((trace, idx) => ({
        ...trace,
        comment: trace.comment || stepTextLines[idx] || trace.comment,
      }));
    }

    const tracePanel = createTracePanel(traceList, traceId);
    block.append(tracePanel);

    item.append(block);
    container.append(item);
  }
}

async function renderReasoningCarousel(selector = '#reasoning-carousel', rows = REASONING_ROWS) {
  const container = $(selector);
  if (!container.length) {
    return;
  }
  container.empty();

  const tracePrefix = buildTracePrefix(selector);

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const item = $('<div>').addClass('item');
    const block = $('<div>').addClass('prompt-block');

    let promptContent = row.prompt || "Prompt unavailable.";
    let stepTextLines = null;
    if (row.promptSrc) {
      const text = await loadText(row.promptSrc);
      if (text) {
        promptContent = text.trim();
        stepTextLines = parseStepTexts(text);
      } else {
        promptContent = "Prompt unavailable.";
      }
    }

    const prompt = $('<p>')
      .addClass('prompt-text')
      .html(`<strong>Prompt:</strong> ${promptContent}`);
    block.append(prompt);

    let traceList = row.reasoningTrace || [];
    if (stepTextLines?.length) {
      traceList = traceList.map((trace, idx) => ({
        ...trace,
        comment: trace.comment || stepTextLines[idx] || trace.comment,
      }));
    }

    const traceId = `${tracePrefix}-trace-${i}`;
    const tracePanel = createTracePanel(traceList, traceId, true, false);
    block.append(tracePanel);

    item.append(block);
    container.append(item);
  }
}

function initializeResultCarousel() {
  if (!document.querySelector('.carousel')) {
    return;
  }

  const options = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  // Keep references so we can react to slide changes (e.g. collapse trace panels
  // to prevent the carousel from staying "tall" due to off-screen slides).
  const instances = bulmaCarousel.attach('.carousel', options);
  window.__bulmaCarouselInstances = instances;
  return instances;
}

$(document).ready(function() {
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    (async function initDemoSection() {
      await renderDemoCarousel('#results-carousel', RESULT_ROWS);
      await renderReasoningCarousel('#reasoning-carousel', REASONING_ROWS);
      const carouselInstances = initializeResultCarousel() || [];

      function resetTracesWithinCarousel(carouselEl) {
        if (!carouselEl) return;
        // Only touch carousels that actually have toggle-controlled traces.
        if (!carouselEl.querySelector('.trace-toggle')) return;
        $(carouselEl).find('.trace-panel').attr('data-visible', 'false');
        $(carouselEl).find('.trace-toggle').text('Show reasoning trace');
      }

      function refreshCarouselLayout(carouselEl) {
        const instance = carouselEl && carouselEl.bulmaCarousel;
        if (!instance) return;
        try {
          // Clear any stale inline height first (fade mode sets these).
          if (instance.container && instance.container.style) {
            instance.container.style.height = '';
          }
          // Force a "no-op" transition so the library recomputes layout/height.
          if (instance.state) {
            instance.state.next = instance.state.index;
          }
          if (instance.transitioner && typeof instance.transitioner.apply === 'function') {
            const cb = typeof instance._setHeight === 'function' ? instance._setHeight.bind(instance) : undefined;
            instance.transitioner.apply(true, cb);
          }
        } catch (e) {
          // Best-effort; layout will still be usable even if this fails.
        }
      }

      // When the user changes examples, make sure any open trace panel is closed.
      // Otherwise, off-screen slides can keep the carousel container tall and leave
      // an empty gap below it.
      carouselInstances.forEach((instance) => {
        if (!instance || !instance.element || typeof instance.on !== 'function') return;
        instance.on('before:show', () => {
          resetTracesWithinCarousel(instance.element);
          refreshCarouselLayout(instance.element);
        });
      });
    })();

    // preloadInterpolationImages();

    // $('#interpolation-slider').on('input', function(event) {
    //   setInterpolationImage(this.value);
    // });
    // setInterpolationImage(0);
    // $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

    $(document).on('click', '.trace-toggle', function() {
      // IMPORTANT: bulma-carousel duplicates slides for looping/infinite mode,
      // which duplicates IDs. So we must resolve the panel relative to the clicked
      // toggle instead of using a global "#id" selector.
      const $button = $(this);
      const $block = $button.closest('.prompt-block');
      const $panel = $block.find('.trace-panel').first();
      if (!$panel.length) {
        return;
      }
      const isVisible = $panel.attr('data-visible') === 'true';
      $panel.attr('data-visible', isVisible ? 'false' : 'true');
      $button.text(isVisible ? 'Show reasoning trace' : 'Hide reasoning trace');

      // After toggling, force a layout refresh so the carousel height collapses
      // immediately when the panel is hidden.
      const carouselEl = $button.closest('.carousel')[0];
      if (carouselEl) {
        try {
          if (carouselEl.bulmaCarousel && carouselEl.bulmaCarousel.container) {
            carouselEl.bulmaCarousel.container.style.height = '';
          }
          if (carouselEl.bulmaCarousel && carouselEl.bulmaCarousel.state) {
            carouselEl.bulmaCarousel.state.next = carouselEl.bulmaCarousel.state.index;
          }
          if (carouselEl.bulmaCarousel && carouselEl.bulmaCarousel.transitioner) {
            const inst = carouselEl.bulmaCarousel;
            const cb = typeof inst._setHeight === 'function' ? inst._setHeight.bind(inst) : undefined;
            inst.transitioner.apply(true, cb);
          }
        } catch (e) {}
      }
    });

    $('#copy-bibtex').on('click', function() {
      const bibtexText = $('#bibtex-code').text();
      const originalContent = '<i class="fas fa-copy"></i> Copy';
      navigator.clipboard.writeText(bibtexText).then(function() {
        const button = $('#copy-bibtex');
        button.html('<i class="fas fa-check"></i> Copied!');
        button.addClass('copied');

        setTimeout(function() {
          button.html(originalContent);
          button.removeClass('copied');
        }, 2000);
      }).catch(function(err) {
        console.error('Failed to copy text: ', err);
        const textArea = document.createElement('textarea');
        textArea.value = bibtexText;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          const button = $('#copy-bibtex');
          button.html('<i class="fas fa-check"></i> Copied!');
          button.addClass('copied');

          setTimeout(function() {
            button.html(originalContent);
            button.removeClass('copied');
          }, 2000);
        } catch (fallbackErr) {
          console.error('Fallback copy failed: ', fallbackErr);
        }
        document.body.removeChild(textArea);
      });
    });

    // Modal Logic
    var $modal = $('#image-modal');
    var $modalImg = $modal.find('.modal-content img');

    function openModal(src) {
      $modalImg.attr('src', src);
      $modal.addClass('is-active');
    }

    function closeModal() {
      $modal.removeClass('is-active');
      $modalImg.attr('src', '');
    }

    $('.modal-background, .modal-close').click(closeModal);

    $(document).on('click', '.model-card img, .trace-step img', function() {
      openModal($(this).attr('src'));
    });
})
