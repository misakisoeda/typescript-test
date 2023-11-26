const SIZE = {
    Small: '小',
    Medium: '中',
    Large: '大'
} as const

type SizeType = keyof typeof SIZE

const sizeCheck = (size: SizeType) => {
    console.log(size)
}

sizeCheck('Small')
// sizeCheck('XL')

// valueの方を作るパターン
type ValueOfSize = typeof SIZE[keyof typeof SIZE]
