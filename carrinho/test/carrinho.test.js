import Carrinho from '../carrinho'
import Item from '../Item';


describe('Testes carrinho', ()=>{

   it('Deve iniciar vazio', ()=>{
    const carrinho = new Carrinho()
    expect(carrinho.subtotal).toBeNull();
   });

   it('Dever ter itens', ()=>{
    const item = new Item('uva', 5, 15);
    const carrinho = new Carrinho();
    carrinho.adiciona(item)

    expect(typeof carrinho).toBe('object')
    expect(carrinho.itens[0]).toBe(item)

    expect(carrinho.itens).toContain(item)
   })

   it('Deve ter a propriedade "total" na inicialização', ()=>{
    const carrinho = new Carrinho()
    expect(carrinho).toHaveProperty('total');
   })

   it('Deve lançar erro ao finalizar compra com carrinho vazio', ()=>{
    function englobaErroCarrinho(){
        const carrinho = new Carrinho();
        carrinho.finalizaCompra()
    }
    expect(englobaErroCarrinho).toThrowError('Carrinho de compras vazio')
   })
})