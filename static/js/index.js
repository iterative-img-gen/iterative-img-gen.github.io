window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}

const MODEL_COLUMNS = [
  { name: "Qwen-Image", key: "qwen" },
  { name: "GPT", key: "gpt" },
  { name: "NanoBanana", key: "nano" },
  { name: "Iter-Refine (ours)", key: "ours" },
];

const SAMPLE_ROWS = [
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
    promptSrc: "./static/assets/3/steps.txt",
    images: {
      qwen: "./static/assets/3/qwen.png",
      gpt: "./static/assets/3/gpt.png",
      nano: "./static/assets/3/gemini.png",
      ours: "./static/assets/3/ours.png",
    },
    imageNotes: {
      qwen: "Carrot not inside bee.",
      gpt: "Carrot not inside bee.",
      nano: "Carrot not inside bee.",
      ours: "Aligned to prompt.",
    },
    imageNoteStatus: {
      ours: "success",
    },
    reasoningTrace: [
      { image: "./static/assets/3/step_0.png" },
      { image: "./static/assets/3/step_1.png" },
      { image: "./static/assets/3/step_2.png" },
      { image: "./static/assets/3/step_3.png" },
    ],
  },
  {
    promptSrc: "./static/assets/5/prompts.txt",
    images: {
      qwen: "./static/assets/5/qwen.png",
      gpt: "./static/assets/5/gpt.png",
      nano: "./static/assets/5/gemini.png",
      ours: "./static/assets/5/ours.png",
    },
    imageNotes: {
      qwen: "Flamingo not dancing or spreading wings.",
      gpt: "Flamingo not dancing or spreading wings.",
      nano: "Flamingo not dancing or spreading wings.",
      ours: "Aligned to prompt.",
    },
    imageNoteStatus: {
      ours: "success",
    },
    reasoningTrace: [
      { image: "./static/assets/5/step_0.png" },
      { image: "./static/assets/5/step_1.png" },
      { image: "./static/assets/5/step_2.png" },
      { image: "./static/assets/5/step_3.png" },
    ],
  },
  {
    promptSrc: "./static/assets/4/step_prompts.txt",
    images: {
      qwen: "./static/assets/4/qwen.png",
      gpt: "./static/assets/4/gpt.png",
      nano: "./static/assets/4/gemini.png",
      ours: "./static/assets/4/ours.png",
    },
    imageNotes: {
      qwen: "Rabbit ears not 3, wrong colors.",
      gpt: "Rabbit ears not 3, wrong colors.",
      nano: "Rabbit ears not 3, wrong colors.",
      ours: "Aligned to prompt.",
    },
    imageNoteStatus: {
      ours: "success",
    },
    reasoningTrace: [
      { image: "./static/assets/4/step_0.png" },
      { image: "./static/assets/4/step_1.png" },
      { image: "./static/assets/4/step_2.png" },
      { image: "./static/assets/4/step_3.png" },
      { image: "./static/assets/4/step_4.png" },
    ],
  },
  {
    prompt: "A realistic photo of a banana with three ears of corn attached to it, all in a kitchen setting with wooden countertops and natural lighting.",
    images: {
      qwen: "./static/assets/6/qwen.png",
      gpt: "./static/assets/6/gpt.png",
      nano: "./static/assets/6/gemini.png",
      ours: "./static/assets/6/ours.png",
    },
    imageNotes: {
      qwen: "Only 2 ears of corn.",
      gpt: "Only 2 ears of corn.",
      nano: "Only 2 ears of corn.",
      ours: "Aligned to prompt.",
    },
    imageNoteStatus: {
      ours: "success",
    },
    reasoningTrace: [
      { image: "./static/assets/6/step_0.png" },
      { image: "./static/assets/6/step_1.png" },
      { image: "./static/assets/6/step_2.png" },
    ],
  },
  {
    prompt: "A photorealistic image of a blue elephant with pink polka dots, standing in a grassy field under a cloudy sky, with a mountain range in the background.",
    images: {
      qwen: "./static/assets/7/qwen.png",
      gpt: "./static/assets/7/gpt.png",
      nano: "./static/assets/7/gemini.png",
      ours: "./static/assets/7/ours.png",
    },
    imageNotes: {
      qwen: "Elephant not blue with pink polka dots.",
      gpt: "Elephant not blue with pink polka dots.",
      nano: "Elephant not blue with pink polka dots.",
      ours: "Aligned to prompt.",
    },
    imageNoteStatus: {
      ours: "success",
    },
    reasoningTrace: [
      { image: "./static/assets/7/step_0.png" },
      { image: "./static/assets/7/step_1.png" },
      { image: "./static/assets/7/step_2.png" },
    ],
  },
  {
    prompt: "Create an image of a red fire hydrant with googly eyes and a party hat, standing on a beach with palm trees, wearing sunglasses and holding a surfboard.",
    images: {
      qwen: "./static/assets/8/qwen.png",
      gpt: "./static/assets/8/gpt.png",
      nano: "./static/assets/8/gemini.png",
      ours: "./static/assets/8/ours.png",
    },
    imageNotes: {
      qwen: "Missing several elements.",
      gpt: "Missing several elements.",
      nano: "Missing several elements.",
      ours: "Aligned to prompt.",
    },
    imageNoteStatus: {
      ours: "success",
    },
    reasoningTrace: [
      { image: "./static/assets/8/step_0.png" },
      { image: "./static/assets/8/step_1.png" },
      { image: "./static/assets/8/step_2.png" },
      { image: "./static/assets/8/step_3.png" },
      { image: "./static/assets/8/step_4.png" },
      { image: "./static/assets/8/step_5.png" },
    ],
  },
];

const PLACEHOLDER_IMAGE = "https://placehold.co/400x400/e2e8f0/64748b?text=No+Image";

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

function createModelCard(model, rowIndex, imageSrc, note, noteStatus) {
  const card = $('<article>').addClass('model-card');
  const figure = $('<figure>');
  const img = $('<img>')
    .attr('src', imageSrc || PLACEHOLDER_IMAGE)
    .attr('alt', `${model.name} result for prompt ${rowIndex + 1}`);
  figure.append(img);
  card.append(figure);

  if (note) {
    const noteEl = $('<p>')
      .addClass(`image-note ${noteStatus ? `image-note--${noteStatus}` : ""}`)
      .text(note);
    card.append(noteEl);
  }

  return card;
}

function createTracePanel(traceList, traceId) {
  const panel = $('<div>')
    .addClass('trace-panel')
    .attr('data-visible', 'false')
    .attr('id', traceId);

  const heading = $('<h4>').text('Reasoning Trace');
  const steps = $('<div>').addClass('trace-steps');

  (traceList || []).forEach((step, index) => {
    const traceCard = $('<article>').addClass('trace-step');
    const figure = $('<figure>');
    const img = $('<img>')
      .attr('src', step.image || PLACEHOLDER_IMAGE)
      .attr('alt', step.stage || `Trace step ${index + 1}`);
    figure.append(img);

    const caption = $('<p>').html(
      `<strong>Step ${index + 1}.</strong> ${step.comment || 'Critic/refinement instruction not provided.'}`
    );

    traceCard.append(figure, caption);
    steps.append(traceCard);
  });

  panel.append(heading, steps);
  return panel;
}

async function renderDemoCarousel() {
  const container = $('#results-carousel');
  if (!container.length) {
    return;
  }
  container.empty();

  for (let i = 0; i < SAMPLE_ROWS.length; i++) {
    const row = SAMPLE_ROWS[i];
    const item = $('<div>').addClass('item');
    const block = $('<div>').addClass('prompt-block');

    let promptContent = row.prompt || "Prompt unavailable.";
    if (row.promptSrc) {
      const text = await loadText(row.promptSrc);
      promptContent = text ? text.trim() : "Prompt unavailable.";
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

    const traceId = `trace-${i}`;
    const toggle = $('<button>')
      .addClass('trace-toggle')
      .attr('type', 'button')
      .attr('data-target', traceId)
      .text('Show reasoning trace');
    block.append(toggle);

    const tracePanel = createTracePanel(row.reasoningTrace, traceId);
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

  bulmaCarousel.attach('.carousel', options);
}

$(document).ready(function() {
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    (async function initDemoSection() {
      await renderDemoCarousel();
      initializeResultCarousel();
    })();

    preloadInterpolationImages();

    $('#interpolation-slider').on('input', function(event) {
      setInterpolationImage(this.value);
    });
    setInterpolationImage(0);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

    $(document).on('click', '.trace-toggle', function() {
      const targetId = $(this).attr('data-target');
      const panel = $('#' + targetId);
      if (!panel.length) {
        return;
      }
      const isVisible = panel.attr('data-visible') === 'true';
      panel.attr('data-visible', isVisible ? 'false' : 'true');
      $(this).text(isVisible ? 'Show reasoning trace' : 'Hide reasoning trace');
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

})
