# react-site-restaurante

Esse projeto React escrito em typescript é uma cardapio de um restaurante que trás de forma dinâmica
as opções de pratos disponíveis

Ele é constituído em de três paginas:

### Inicio

![inicio](./README_midia/Inicio.png)

### Cardápio

![Cardápio](./README_midia/Cardapio.png)

### Sobre

![Sobre](./README_midia/Sobre.png)

# Dependências

## [React-router-dom](https://reactrouter.com/en/main)

As dependências utilizadas nesse projeto busca facilitar o desenvolvimento
e aumentar a agilidade.

O [react-router-dom](https://reactrouter.com/en/main) fica responsável por gerenciar a exibição das paginas
por meio das URLs "/", "/cardapio", "/sobre", toda a configuração de rotas se encontra no arquivo [src/routes.tsx](./src/routes.tsx),
nesse arquivo é feita a definição dos componentes de paginas a serem renderizados, Ex:

```jsx
export default function AppRouter() {
  return (
    <main>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadram />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
```

Observe que o componente "Menu" esta fora da definição das rotas, isso acontece pois ele é um
elemento padrão de todas as paginas.

## [Sass](https://www.npmjs.com/package/sass)

Para maior organização e para aproveitar melhor o design de projeto css BEM, utilizei o [sass](https://www.npmjs.com/package/sass),
framework css que facilita a escrita de componentes modulares e reutilizáveis.

Com isso a parte estilização do site pode ser configurada e alterada sem dores de cabeça.

## [Classnames]()

Com essa dependência podemos definir o "className" do componente de forma dinâmica através de determinadas condições,
assim renderizando os elementos com estilos diferentes a depender, por exemplo, da seleção feita pelo usuário.

Um exemplo simples seria o seguinte:

```jsx
import classNames from "classnames";
import style from "./style.module.scss"

export default function Element() {
  let count = 5;

  return (
    <section className={
      classNames(
        [style.section__primary]: count >= 5,
        [style.section__secondary]: cont < 5,
      )
    }>
      <h1>Element<h1/>
      <p>sample element<p/>
    <section/>
  )
}
```

Neste caso o "className" de section será section\_\_primary.
