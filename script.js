const about = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. At aliquam illum est officiis
temporibus quidem ut debitis quasi laudantium, enim hic soluta alias, sunt eveniet, porro
nihil corrupti a amet. Harum magnam laudantium animi quis odio provident ullam dolor.
Tenetur laudantium pariatur nihil, necessitatibus facilis corrupti dolore. Magni, est
dignissimos! Accusantium neque officiis architecto illum illo accusamus reiciendis
molestias saepe ab nihil. Optio fuga reiciendis, maxime unde expedita aliquam provident
esse ipsa, consectetur minus officiis, veniam voluptas doloribus voluptatibus dolores ea.
Facere obcaecati ducimus commodi eum voluptates labore officiis, dolor dolorum voluptas
maiores possimus totam! Officia ipsum at dolorum explicabo.`;

const fetchPlaceholderParagraph = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    const paragraph = data.body;
    return paragraph;
  } catch (error) {
    console.error(error);
    return '<----- Failed to fetch data ----->';
  }
};

const updateParagraph = async () => {
  const paragraph = await fetchPlaceholderParagraph();
  const paragraphElement = document.querySelector('#para-text');
  paragraphElement.textContent = paragraph + '. ' + about;
};

updateParagraph();
