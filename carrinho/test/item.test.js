import Item from '../Item.js'


describe('Teste dos itens', ()=>{
    it('Deve ter 3 campos: nome, valor e quantidade', ()=>{
        const item = new Item('uva', 5, 10)
        expect(item.nome).toBe('uva')
        expect(item.valor).toBe(5)
        expect(item.quantidade).toBe(10)
    })
    
    it('Deve ter o preço de acordo com a quantidade de item', ()=>{
        const item = new Item('uva', 2, 10) 
        const esperado = 20
        const valorTotal = item.pegarValorTotalItem()
        expect(valorTotal).toBe(esperado)
    })
})