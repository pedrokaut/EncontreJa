import { useMemo, useState } from 'react'
import logo from './assets/icon-logo.svg'
import garrafaAzul from './assets/items/garrafa-azul.jpg'
import foneCinza from './assets/items/fone-cinza.jpg'
import chaveiro from './assets/items/chaveiro.jpg'
import carregador from './assets/items/carregador.jpg'
import mouse from './assets/items/mouse.jpg'
import estojo from './assets/items/estojo.jpg'
import casaco from './assets/items/casaco.jpg'
import cadernoPreto from './assets/items/caderno-preto.jpg'
import carteira from './assets/items/carteira.jpg'
import fonePreto from './assets/items/fone-preto.jpg'
import mochilaAzul from './assets/items/mochila-azul.jpg'
import livro from './assets/items/livro.jpg'
import cadernoAmarelo from './assets/items/caderno-amarelo.jpg'
import tablet from './assets/items/tablet.jpg'
import escova from './assets/items/escova.jpg'
import mochilaPreta from './assets/items/mochila-preta.jpg'
import garrafaVerde from './assets/items/garrafa-verde.jpg'
import garrafaPablo from './assets/items/garrafa-pablo.jpg'
import './App.css'

const itemCards = [
  {
    title: 'Garrafa azul escuro',
    status: 'Perdido',
    category: 'Garrafa',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Esta garrafa está com alguns amassados e arranhados em sua lateral.',
    note: 'Hoje, 19:29',
    place: 'banheiro masculino do bloco adm',
    image: garrafaAzul,
  },
  {
    title: 'Fone de ouvido',
    status: 'Encontrado',
    category: 'Fone de ouvido',
    location: 'Pau dos Ferros, UFERSA',
    details: 'É um fone de ouvido sem fio preto.',
    note: '',
    image: foneCinza,
  },
  {
    title: 'Chaveiro',
    status: 'Perdido',
    category: 'Chaveiro',
    location: 'Pau dos Ferros, UFERSA',
    details: 'É um chaveiro de um cachorro, levemente sujo.',
    note: 'Hoje, 18:54',
    place: 'sala 07 bloco 01',
    image: chaveiro,
  },
  {
    title: 'Carregador',
    status: 'Perdido',
    category: 'Carregador',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Carregador de Iphone.',
    note: 'Hoje, 18:15',
    place: 'sala 14 bloco 02',
    image: carregador,
  },
  {
    title: 'Mouse',
    status: 'Perdido',
    category: 'Mouse',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Mouse sem fio.',
    note: 'Hoje, 17:24',
    place: 'biblioteca',
    image: mouse,
  },
  {
    title: 'Estojo',
    status: 'Encontrado',
    category: 'Estojo',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Estojo azul escuro com detalhes em rosa, tem duas divisórias.',
    note: '',
    image: estojo,
  },
  {
    title: 'Casaco',
    status: 'Perdido',
    category: 'Casaco',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Casaco preto com um rasgo na manga.',
    note: 'Hoje, 17:00',
    place: 'auditorio LTI',
    image: casaco,
  },
  {
    title: 'Caderno',
    status: 'Encontrado',
    category: 'Caderno',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Caderno preto no nome de João.',
    note: '',
    image: cadernoPreto,
  },
  {
    title: 'Carteira',
    status: 'Perdido',
    category: 'Carteira',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Carteira com documentos e 3 notas de 100 reais',
    note: 'Hoje, 17:28',
    place: 'centro de convivência',
    image: carteira,
  },
  {
    title: 'Fone de ouvido',
    status: 'Perdido',
    category: 'Fone de ouvido',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Fone de ouvido com fio da marca Motorola',
    note: 'Hoje, 16:11',
    place: 'sala 07 bloco 01',
    image: fonePreto,
  },
  {
    title: 'Mochila',
    status: 'Perdido',
    category: 'Mochila',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Mochila azul da marca Flamingo',
    note: 'Hoje, 15:48',
    place: 'biblioteca',
    image: mochilaAzul,
  },
  {
    title: 'Livro',
    status: 'Perdido',
    category: 'Livro',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Livro com o título "CAMINHANDO COM MARIA"',
    note: 'Hoje, 14:36',
    place: 'biblioteca',
    image: livro,
  },
  {
    title: 'Caderno',
    status: 'Encontrado',
    category: 'Caderno',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Caderno amarelo da marca Baag',
    note: '',
    image: cadernoAmarelo,
  },
  {
    title: 'Tablet',
    status: 'Encontrado',
    category: 'Tablet',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Tablet cinza com papel de parede colorido',
    note: '',
    image: tablet,
  },
  {
    title: 'Escova de cabelo',
    status: 'Encontrado',
    category: 'Escova',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Escova de cabelo rosa com roxo',
    note: '',
    image: escova,
  },
  {
    title: 'Mochila',
    status: 'Encontrado',
    category: 'Mochila',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Mochila preta com botton go/RN',
    note: '',
    image: mochilaPreta,
  },
  {
    title: 'Garrafa de Água',
    status: 'Perdido',
    category: 'garrafa',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Garrafa cinza com arranhoes',
    note: 'Hoje, 13:34',
    place: 'centro de convivência',
    image: garrafaVerde,
  },
  {
    title: 'Garrafa',
    status: 'Perdido',
    category: 'Garrafa',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Garrafa com nome de Pablo Ryan',
    note: 'Hoje, 13:05',
    place: 'auditorio LTI',
    image: garrafaPablo,
  },
]

const categories = ['Todos', ...Array.from(new Set(itemCards.map((item) => item.category)))]

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('Todos')
  const [filter, setFilter] = useState('Recente')
  const [audience, setAudience] = useState('Antigos')

  const filteredItems = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    return itemCards.filter((item) => {
      const matchesQuery =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.details.toLowerCase().includes(query)
      const matchesCategory = category === 'Todos' || item.category === category
      return matchesQuery && matchesCategory
    })
  }, [category, searchTerm])

  return (
    <div className="app-shell">
      <header className="page-header">
        <a className="brand" href="#">
          <img src={logo} alt="" />
          <span>EncontreJá</span>
        </a>

        <nav className="main-nav" aria-label="Navegação principal">
          <a className="active" href="#">
            Início
          </a>
          <a href="#">Anúncios</a>
          <a href="#">Chat</a>
          <a href="#">Notificação</a>
          <button type="button" className="icon-button" aria-label="Favoritos">
            <span className="heart-icon" />
          </button>
          <button type="button" className="icon-button" aria-label="Perfil">
            <span className="user-icon" />
          </button>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <h1>Encontre seu item perdido</h1>
            <p>Perdeu ou encontrou algo no campus? Conectamos você ao seu objetivo.</p>
          </div>

          <form className="search-panel">
            <div className="search-grid">
              <input
                type="search"
                aria-label="Buscar item"
                placeholder="Caderno, garrafa, estojo..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />

              <select
                aria-label="Categoria"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                {categories.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>

              <select
                aria-label="Ordenação"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
              >
                <option>Recente</option>
                <option>Mais vistos</option>
              </select>

              <select
                aria-label="Período"
                value={audience}
                onChange={(event) => setAudience(event.target.value)}
              >
                <option>Antigos</option>
                <option>Hoje</option>
              </select>
            </div>

            <button type="submit" className="search-button">
              <span className="search-icon" />
              Procurar
            </button>
          </form>
        </section>

        <section className="items-section">
          <div className="items-header">
            <div>
              <h2>Itens Registrados</h2>
              <p>{filteredItems.length} itens</p>
            </div>
            <button type="button" className="primary-button">
              Cadastrar Item Perdido
            </button>
          </div>

          <div className="cards-grid">
            {filteredItems.map((item, index) => (
              <article key={`${item.title}-${index}`} className="item-card">
                <div className="card-media">
                  <img src={item.image} alt={item.title} />
                  {item.status === 'Encontrado' && <span className="return-badge">Devolvido</span>}
                  <span className="category-badge">{item.category}</span>
                </div>

                <div className="card-content">
                  <p className="card-location">
                    <span className="pin-icon" />
                    {item.location}
                  </p>
                  <h3>{item.title}</h3>
                  <p className="card-details">{item.details}</p>
                  {item.note && <p className="card-time">{item.note}</p>}
                </div>

                <div className={`card-status ${item.status === 'Encontrado' ? 'found' : 'lost'}`}>
                  {item.status === 'Encontrado' ? (
                    <>
                      <strong>Encontrado</strong>
                      <span>Este item foi devolvido ao dono</span>
                    </>
                  ) : (
                    <p>
                      <strong>Perdido</strong>
                      {item.place && <span> / {item.place}</span>}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-column">
            <strong className="footer-brand">
              <img src={logo} alt="" />
              EncontreJá
            </strong>
            <p>O jeito mais rápido e fácil de encontrar seus itens perdidos.</p>
          </div>

          <div className="footer-column">
            <p className="footer-title">Links rápidos</p>
            <a href="#">FAQ</a>
            <a href="#">Início</a>
            <a href="#">Anunciar Item</a>
          </div>

          <div className="footer-column">
            <p className="footer-title">Contato</p>
            <p>Email: encontreja@gmail.com</p>
            <p>Telefone: +55 (84) 6924 - 5731</p>
            <div className="support">
              <p>Suporte ao Cliente:</p>
              <span>+55 (84) 4002 - 8922</span>
              <span>+55 (84) 4567 - 3906</span>
            </div>
            <p>Endereço: Rio Grande do Norte</p>
          </div>
        </div>

        <p className="copyright">© 2026 EncontreJá. Todos os direitos reservados</p>
      </footer>
    </div>
  )
}

export default App
