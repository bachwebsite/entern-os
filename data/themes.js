function changetheme(theme) {
  var linkTags = document.querySelectorAll('link[rel="stylesheet"]:not([href="data/normal.css"])');

  linkTags.forEach(function(linkTag) {
    linkTag.parentNode.removeChild(linkTag);
  });

  var linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';

  if (theme === 'dark') {
    linkElement.href = '/data/themes/main/style.css';
  } else if (theme === 'light') {
    linkElement.href = '/data/themes/light/style.css';
  } else if (theme === 'blue') {
    linkElement.href = '/data/themes/blue/style.css';
  } else {
    console.error('Invalid theme:', theme);
    return;
  }

  document.head.appendChild(linkElement);
}
