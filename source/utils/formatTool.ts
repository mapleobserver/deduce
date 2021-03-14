function baseFormat(str: string): string {
  return str.replace(/<.+?>/g, '');
}

export function itemNameFormat(itemName: string): string {
  return baseFormat(itemName).replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

export function tipFormat(message: string): string {
  return baseFormat(message.replace(/<br[/]>/g, '\n'));
}

export function entryFormat(entry: string): string {
  return entry.replace(/\([\d]+\)|[^\p{Unified_Ideograph}%，()]|秒/gu, '');
}

export default {
  itemNameFormat,
  tipFormat,
  entryFormat,
};
