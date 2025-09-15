export const getRarity = (rarity:string) => {
  switch (rarity) {
    case 'ssr':
      return 'SSR_Supports'
    case 'sr':
      return 'SR_Supports'
    case 'r':
      return 'R_Supports'
    default:
      return 'SSR_Supports'
  }
};

export const formatRarityLabel = (input: string): string => {
  return input
    .replace(/_/g, ' ')
    .trim()
}
