function baseFormat(str: string): string {
  return str.replace(/<.+?>/g, '');
}

export function itemNameFormat(itemName: string): string {
  return baseFormat(itemName).replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

export function tipFormat(message: string): string {
  return baseFormat(message);
}

export default {
  itemNameFormat,
  tipFormat,
};
