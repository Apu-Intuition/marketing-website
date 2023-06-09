type ElementProps = {
  tag?: string;
  id?: string;
  classNames?: string;
  parent?: Element;
};

type TextProps = ElementProps & {
  text: string;
};

export const createElement = ({
  tag = "div",
  id,
  classNames,
  parent,
}: ElementProps) => {
  const element = document.createElement(tag);
  if (id) element.id = id;
  if (classNames) element.classList.add(...classNames.split(" "));
  if (parent) parent.appendChild(element);
  return element;
};
export const createShape = ({
  tag = "div",
  id,
  classNames,
  parent,
}: ElementProps) => {
  return createElement({ tag, id, classNames, parent });
};

export const createText = ({
  tag = "div",
  id,
  classNames,
  parent,
  text,
}: TextProps) => {
  const element = document.createElement(tag);
  if (id) element.id = id;
  if (text) element.textContent = text;
  if (classNames) element.classList.add(...classNames.split(" "));
  if (parent) parent.appendChild(element);
  return element;
};
