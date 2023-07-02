export const applyAnchorStyles = (item) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = item;

  const anchors = wrapper.getElementsByTagName('a');
  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];
    anchor.className = 'border-b-2 border-orange-600 hover:border-b-0 hover:bg-orange-600';
  }

  return wrapper.innerHTML;
};
