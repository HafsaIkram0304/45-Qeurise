interface item{
    name: string
    price: number
}
//creat iwo object
const book: item ={
name:'ASSENTIAL TYPESCRIPT',
price: 450
}
const apple: item={
    name: "apple",
    price: 200
}
console.log(`book name: ${book.name}, price:$ ${book.price}`)
console.log(`apple name: ${apple.name}, price$ ${apple.price}`)
