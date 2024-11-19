import { createOptimizedPicture } from '../../scripts/aem.js';
import { fetchPlaceholders, getMetadata } from '../../scripts/aem.js';

export default async function decorate(block) {
  /* change to ul, li */
  const placeholders = await fetchPlaceholders('');
  
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    const btn = document.createElement('button')
    btn.textContent = placeholders.click;
    
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    li.appendChild(btn)
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}
