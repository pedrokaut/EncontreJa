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

const baseItems = [
  {
    id: 1,
    title: 'Garrafa azul escuro',
    status: 'Perdido',
    category: 'Garrafa',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Esta garrafa está com alguns amassados e arranhados em sua lateral.',
    date: '2026-06-13',
    note: 'Hoje, 19:29',
    place: 'banheiro masculino do bloco adm',
    owner: 'Pablo Ryan',
    contact: 'pablo.ryan@ufersa.edu.br',
    image: garrafaAzul,
  },
  {
    id: 2,
    title: 'Fone de ouvido',
    status: 'Encontrado',
    category: 'Fone de ouvido',
    location: 'Pau dos Ferros, UFERSA',
    details: 'É um fone de ouvido sem fio preto.',
    date: '2026-06-13',
    note: 'Hoje, 19:05',
    currentLocation: 'Com a segurança',
    owner: 'Jennefhy Saiury',
    contact: 'jennefhy.saiury@ufersa.edu.br',
    image: foneCinza,
  },
  {
    id: 3,
    title: 'Chaveiro',
    status: 'Perdido',
    category: 'Chaveiro',
    location: 'Pau dos Ferros, UFERSA',
    details: 'É um chaveiro de um cachorro, levemente sujo.',
    date: '2026-06-13',
    note: 'Hoje, 18:54',
    place: 'sala 07 bloco 01',
    owner: 'Pedro Victor',
    contact: 'pedro.victor@ufersa.edu.br',
    image: chaveiro,
  },
  {
    id: 4,
    title: 'Carregador',
    status: 'Perdido',
    category: 'Carregador',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Carregador de Iphone.',
    date: '2026-06-13',
    note: 'Hoje, 18:15',
    place: 'sala 14 bloco 02',
    owner: 'Pedro Victor',
    contact: 'pedro.victor@ufersa.edu.br',
    image: carregador,
  },
  {
    id: 5,
    title: 'Mouse',
    status: 'Perdido',
    category: 'Mouse',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Mouse sem fio.',
    date: '2026-06-13',
    note: 'Hoje, 17:24',
    place: 'biblioteca',
    owner: 'Pablo Ryan',
    contact: 'pablo.ryan@ufersa.edu.br',
    image: mouse,
  },
  {
    id: 6,
    title: 'Estojo',
    status: 'Encontrado',
    category: 'Estojo',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Estojo azul escuro com detalhes em rosa, tem duas divisórias.',
    date: '2026-06-13',
    note: 'Hoje, 17:08',
    currentLocation: 'Comigo',
    owner: 'Pedro Victor',
    contact: 'pedro.victor@ufersa.edu.br',
    image: estojo,
  },
  {
    id: 7,
    title: 'Casaco',
    status: 'Perdido',
    category: 'Casaco',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Casaco preto com um rasgo na manga.',
    date: '2026-06-13',
    note: 'Hoje, 17:00',
    place: 'auditorio LTI',
    owner: 'Jennefhy Saiury',
    contact: 'jennefhy.saiury@ufersa.edu.br',
    image: casaco,
  },
  {
    id: 8,
    title: 'Caderno',
    status: 'Encontrado',
    category: 'Caderno',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Caderno preto no nome de João.',
    date: '2026-06-13',
    note: 'Hoje, 16:48',
    currentLocation: 'Com a segurança',
    owner: 'Pedro Victor',
    contact: 'pedro.victor@ufersa.edu.br',
    image: cadernoPreto,
  },
  {
    id: 9,
    title: 'Carteira',
    status: 'Perdido',
    category: 'Carteira',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Carteira com documentos e 3 notas de 100 reais.',
    date: '2026-06-13',
    note: 'Hoje, 17:28',
    place: 'centro de convivência',
    owner: 'Pedro Victor',
    contact: 'pedro.victor@ufersa.edu.br',
    image: carteira,
  },
  {
    id: 10,
    title: 'Fone de ouvido',
    status: 'Perdido',
    category: 'Fone de ouvido',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Fone de ouvido com fio da marca Motorola.',
    date: '2026-06-13',
    note: 'Hoje, 16:11',
    place: 'sala 07 bloco 01',
    owner: 'Pablo Ryan',
    contact: 'pablo.ryan@ufersa.edu.br',
    image: fonePreto,
  },
  {
    id: 11,
    title: 'Mochila',
    status: 'Perdido',
    category: 'Mochila',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Mochila azul da marca Flamingo.',
    date: '2026-06-13',
    note: 'Hoje, 15:48',
    place: 'biblioteca',
    owner: 'Jennefhy Saiury',
    contact: 'jennefhy.saiury@ufersa.edu.br',
    image: mochilaAzul,
  },
  {
    id: 12,
    title: 'Livro',
    status: 'Perdido',
    category: 'Livro',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Livro com o título "CAMINHANDO COM MARIA".',
    date: '2026-06-13',
    note: 'Hoje, 14:36',
    place: 'biblioteca',
    owner: 'Pedro Victor',
    contact: 'pedro.victor@ufersa.edu.br',
    image: livro,
  },
  {
    id: 13,
    title: 'Caderno',
    status: 'Encontrado',
    category: 'Caderno',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Caderno amarelo da marca Baag.',
    date: '2026-06-12',
    note: 'Ontem, 20:44',
    currentLocation: 'Comigo',
    owner: 'Jennefhy Saiury',
    contact: 'jennefhy.saiury@ufersa.edu.br',
    image: cadernoAmarelo,
  },
  {
    id: 14,
    title: 'Tablet',
    status: 'Encontrado',
    category: 'Tablet',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Tablet cinza com papel de parede colorido.',
    date: '2026-06-12',
    note: 'Ontem, 20:05',
    currentLocation: 'Com a segurança',
    owner: 'Pedro Victor',
    contact: 'pedro.victor@ufersa.edu.br',
    image: tablet,
  },
  {
    id: 15,
    title: 'Escova de cabelo',
    status: 'Encontrado',
    category: 'Escova',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Escova de cabelo rosa com roxo.',
    date: '2026-06-12',
    note: 'Ontem, 18:22',
    currentLocation: 'Comigo',
    owner: 'Pablo Ryan',
    contact: 'pablo.ryan@ufersa.edu.br',
    image: escova,
  },
  {
    id: 16,
    title: 'Mochila',
    status: 'Encontrado',
    category: 'Mochila',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Mochila preta com botton go/RN.',
    date: '2026-06-11',
    note: '11/06, 16:20',
    currentLocation: 'Com a segurança',
    owner: 'Pedro Victor',
    contact: 'pedro.victor@ufersa.edu.br',
    image: mochilaPreta,
  },
  {
    id: 17,
    title: 'Garrafa de Água',
    status: 'Perdido',
    category: 'Garrafa',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Garrafa cinza com arranhões.',
    date: '2026-06-11',
    note: '11/06, 13:34',
    place: 'centro de convivência',
    owner: 'Jennefhy Saiury',
    contact: 'jennefhy.saiury@ufersa.edu.br',
    image: garrafaVerde,
  },
  {
    id: 18,
    title: 'Garrafa',
    status: 'Perdido',
    category: 'Garrafa',
    location: 'Pau dos Ferros, UFERSA',
    details: 'Garrafa com nome de Pablo Ryan.',
    date: '2026-06-11',
    note: '11/06, 13:05',
    place: 'auditorio LTI',
    owner: 'Pablo Ryan',
    contact: 'pablo.ryan@ufersa.edu.br',
    image: garrafaPablo,
  },
]

const categories = ['Todos', ...Array.from(new Set(baseItems.map((item) => item.category)))]
const emptyItemForm = {
  category: '',
  description: '',
  location: '',
  date: '',
  currentLocation: 'Comigo',
  imageName: '',
}

function App() {
  const [route, setRoute] = useState('login')
  const [user, setUser] = useState(null)
  const [items, setItems] = useState(baseItems)
  const [selectedItemId, setSelectedItemId] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('Todos')
  const [typeFilter, setTypeFilter] = useState('Todos')
  const [dateFilter, setDateFilter] = useState('')
  const [locationFilter, setLocationFilter] = useState('')
  const [includeClosed, setIncludeClosed] = useState(false)
  const [notice, setNotice] = useState('')
  const [claims, setClaims] = useState([])

  const selectedItem = items.find((item) => item.id === selectedItemId) ?? items[0]

  const filteredItems = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()
    const place = locationFilter.trim().toLowerCase()

    return items.filter((item) => {
      const defaultVisible = includeClosed || !['Devolvido', 'Encerrado'].includes(item.status)
      const matchesQuery =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.details.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      const matchesCategory = category === 'Todos' || item.category === category
      const matchesType = typeFilter === 'Todos' || item.status === typeFilter
      const matchesLocation = !place || item.location.toLowerCase().includes(place) || item.place?.toLowerCase().includes(place)
      const matchesDate = !dateFilter || item.date === dateFilter

      return defaultVisible && matchesQuery && matchesCategory && matchesType && matchesLocation && matchesDate
    })
  }, [category, dateFilter, includeClosed, items, locationFilter, searchTerm, typeFilter])

  function navigate(nextRoute) {
    setRoute(nextRoute)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function openItem(item) {
    setSelectedItemId(item.id)
    navigate('details')
  }

  function handleLogin(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email')).trim()
    const password = String(formData.get('password')).trim()

    if (!email.includes('@') || password.length < 4) {
      setNotice('E-mail ou senha incorretos. Tente novamente.')
      return
    }

    setUser({ name: 'Pedro Victor', email })
    setNotice('Login realizado com sucesso.')
    navigate('home')
  }

  function handleRegister(event, status) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const payload = {
      category: String(formData.get('category')).trim(),
      description: String(formData.get('description')).trim(),
      location: String(formData.get('location')).trim(),
      date: String(formData.get('date')).trim(),
      currentLocation: String(formData.get('currentLocation') || 'Comigo'),
      imageName: String(formData.get('imageName')).trim(),
    }

    if (!payload.category || !payload.description || !payload.location) {
      setNotice('Preencha todos os campos obrigatórios.')
      return
    }

    const today = new Date().toISOString().slice(0, 10)
    if (payload.date && payload.date > today) {
      setNotice('A data informada não pode ser uma data futura.')
      return
    }

    const newItem = {
      id: Date.now(),
      title: payload.category,
      status,
      category: payload.category,
      location: payload.location,
      details: payload.description,
      date: payload.date || today,
      note: 'Agora',
      place: status === 'Perdido' ? payload.location : undefined,
      currentLocation: status === 'Encontrado' ? payload.currentLocation : undefined,
      owner: user?.name ?? 'Usuário',
      contact: user?.email ?? 'usuario@ufersa.edu.br',
      image: status === 'Encontrado' ? foneCinza : garrafaAzul,
    }

    setItems((current) => [newItem, ...current])
    setSelectedItemId(newItem.id)
    setNotice('Item registrado com sucesso.')
    navigate('matches')
  }

  function handleClaim(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const confirmation = String(formData.get('confirmation')).trim()

    if (!confirmation) {
      setNotice('Descreva uma característica do item para continuar.')
      return
    }

    if (claims.some((claim) => claim.itemId === selectedItem.id && claim.active)) {
      setNotice('Este item já possui uma reivindicação ativa.')
      return
    }

    setClaims((current) => [
      ...current,
      {
        itemId: selectedItem.id,
        requester: user?.email ?? 'usuario@ufersa.edu.br',
        confirmation,
        active: true,
        createdAt: new Date().toLocaleString('pt-BR'),
      },
    ])
    setItems((current) =>
      current.map((item) =>
        item.id === selectedItem.id ? { ...item, status: 'Em verificação' } : item,
      ),
    )
    setNotice(`Reivindicação registrada. Contato: ${selectedItem.contact}`)
    navigate('details')
  }

  function confirmReturn(itemId) {
    setItems((current) =>
      current.map((item) => (item.id === itemId ? { ...item, status: 'Devolvido' } : item)),
    )
    setClaims((current) =>
      current.map((claim) => (claim.itemId === itemId ? { ...claim, active: false } : claim)),
    )
    setNotice('Devolução confirmada. Obrigado por usar o EncontreJá!')
  }

  return (
    <div className="app-shell">
      <Header route={route} user={user} navigate={navigate} />

      {notice && <div className="toast-message">{notice}</div>}

      {route === 'login' && <LoginScreen onSubmit={handleLogin} navigate={navigate} />}

      {route === 'home' && (
        <HomeScreen
          category={category}
          categories={categories}
          dateFilter={dateFilter}
          filteredItems={filteredItems}
          includeClosed={includeClosed}
          locationFilter={locationFilter}
          searchTerm={searchTerm}
          setCategory={setCategory}
          setDateFilter={setDateFilter}
          setIncludeClosed={setIncludeClosed}
          setLocationFilter={setLocationFilter}
          setSearchTerm={setSearchTerm}
          setTypeFilter={setTypeFilter}
          typeFilter={typeFilter}
          navigate={navigate}
          openItem={openItem}
        />
      )}

      {route === 'register-lost' && (
        <RegisterItemScreen
          kind="lost"
          title="Registrar Item Perdido"
          subtitle="Informe os dados do item para que a comunidade ajude na busca."
          onSubmit={(event) => handleRegister(event, 'Perdido')}
          navigate={navigate}
        />
      )}

      {route === 'register-found' && (
        <RegisterItemScreen
          kind="found"
          title="Registrar Item Encontrado"
          subtitle="Cadastre o objeto encontrado e indique onde ele está guardado."
          onSubmit={(event) => handleRegister(event, 'Encontrado')}
          navigate={navigate}
        />
      )}

      {route === 'details' && selectedItem && (
        <DetailsScreen item={selectedItem} navigate={navigate} onClaim={handleClaim} />
      )}

      {route === 'matches' && selectedItem && (
        <MatchesScreen item={selectedItem} items={items} navigate={navigate} openItem={openItem} />
      )}

      {route === 'my-items' && (
        <MyItemsScreen
          claims={claims}
          items={items}
          user={user}
          navigate={navigate}
          openItem={openItem}
          confirmReturn={confirmReturn}
        />
      )}

      <Footer />
    </div>
  )
}

function Header({ route, user, navigate }) {
  const isLogged = Boolean(user)

  return (
    <header className="page-header">
      <button className="brand nav-button" type="button" onClick={() => navigate(isLogged ? 'home' : 'login')}>
        <img src={logo} alt="" />
        <span>EncontreJá</span>
      </button>

      <nav className="main-nav" aria-label="Navegação principal">
        {isLogged ? (
          <>
            <button className={route === 'home' ? 'active' : ''} type="button" onClick={() => navigate('home')}>
              Início
            </button>
            <button type="button" onClick={() => navigate('home')}>
              Anúncios
            </button>
            <button type="button" onClick={() => navigate('my-items')}>
              Meus Itens
            </button>
            <button type="button" onClick={() => navigate('register-found')}>
              Encontrado
            </button>
            <button type="button" onClick={() => navigate('register-lost')}>
              Perdido
            </button>
            <button type="button" className="icon-button" aria-label="Notificações" onClick={() => navigate('my-items')}>
              <span className="heart-icon" />
            </button>
            <button type="button" className="icon-button" aria-label="Perfil" onClick={() => navigate('my-items')}>
              <span className="user-icon" />
            </button>
          </>
        ) : (
          <button className={route === 'login' ? 'active' : ''} type="button" onClick={() => navigate('login')}>
            Entrar
          </button>
        )}
      </nav>
    </header>
  )
}

function LoginScreen({ onSubmit }) {
  return (
    <main className="auth-page">
      <section className="auth-hero">
        <div>
          <p className="eyebrow">EncontreJá</p>
          <h1>Acesse com suas credenciais institucionais</h1>
          <p>Entre para registrar itens, acompanhar reivindicações e encontrar objetos no campus.</p>
        </div>
      </section>

      <section className="form-card auth-card">
        <h2>Entrar</h2>
        <form onSubmit={onSubmit} className="stack-form">
          <label>
            E-mail institucional
            <input name="email" type="email" placeholder="nome@ufersa.edu.br" required />
          </label>
          <label>
            Senha
            <input name="password" type="password" placeholder="Sua senha" minLength="4" required />
          </label>
          <button type="submit" className="primary-button compact">
            Entrar
          </button>
        </form>
      </section>
    </main>
  )
}

function HomeScreen(props) {
  const {
    category,
    categories,
    dateFilter,
    filteredItems,
    includeClosed,
    locationFilter,
    searchTerm,
    setCategory,
    setDateFilter,
    setIncludeClosed,
    setLocationFilter,
    setSearchTerm,
    setTypeFilter,
    typeFilter,
    navigate,
    openItem,
  } = props

  return (
    <main>
      <section className="hero-section">
        <div className="hero-copy">
          <h1>Encontre seu item perdido</h1>
          <p>Perdeu ou encontrou algo no campus? Conectamos você ao seu objetivo.</p>
        </div>

        <form className="search-panel" onSubmit={(event) => event.preventDefault()}>
          <div className="search-grid">
            <input
              type="search"
              aria-label="Buscar item"
              placeholder="Caderno, garrafa, estojo..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />

            <select aria-label="Tipo" value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}>
              <option>Todos</option>
              <option>Perdido</option>
              <option>Encontrado</option>
            </select>

            <select aria-label="Categoria" value={category} onChange={(event) => setCategory(event.target.value)}>
              {categories.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>

            <input
              aria-label="Local"
              placeholder="Local"
              value={locationFilter}
              onChange={(event) => setLocationFilter(event.target.value)}
            />
          </div>

          <div className="search-actions">
            <label className="inline-control">
              <input
                type="date"
                value={dateFilter}
                onChange={(event) => setDateFilter(event.target.value)}
              />
            </label>
            <label className="check-control">
              <input
                type="checkbox"
                checked={includeClosed}
                onChange={(event) => setIncludeClosed(event.target.checked)}
              />
              Exibir devolvidos
            </label>
            <button type="submit" className="search-button">
              <span className="search-icon" />
              Procurar
            </button>
          </div>
        </form>
      </section>

      <section className="items-section">
        <div className="items-header">
          <div>
            <h2>Itens Registrados</h2>
            <p>{filteredItems.length} itens</p>
          </div>
          <div className="header-actions">
            <button type="button" className="secondary-button" onClick={() => navigate('register-found')}>
              Registrar Item Encontrado
            </button>
            <button type="button" className="primary-button" onClick={() => navigate('register-lost')}>
              Cadastrar Item Perdido
            </button>
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="cards-grid">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} onOpen={() => openItem(item)} />
            ))}
          </div>
        ) : (
          <EmptyState navigate={navigate} />
        )}
      </section>
    </main>
  )
}

function ItemCard({ item, onOpen }) {
  const isFound = item.status === 'Encontrado' || item.status === 'Em verificação' || item.status === 'Devolvido'

  return (
    <article className="item-card">
      <button type="button" className="card-button" onClick={onOpen}>
        <div className="card-media">
          <img src={item.image} alt={item.title} />
          {item.status === 'Devolvido' && <span className="return-badge">Devolvido</span>}
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

        <div className={`card-status ${isFound ? 'found' : 'lost'}`}>
          {isFound ? (
            <>
              <strong>{item.status}</strong>
              <span>{item.status === 'Devolvido' ? 'Este item foi devolvido ao dono' : item.currentLocation}</span>
            </>
          ) : (
            <p>
              <strong>Perdido</strong>
              {item.place && <span> / {item.place}</span>}
            </p>
          )}
        </div>
      </button>
    </article>
  )
}

function RegisterItemScreen({ kind, title, subtitle, onSubmit, navigate }) {
  const isFound = kind === 'found'

  return (
    <main className="form-page">
      <section className="screen-heading">
        <p className="eyebrow">{isFound ? 'Item encontrado' : 'Item perdido'}</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </section>

      <section className="form-card">
        <form className="stack-form" onSubmit={onSubmit}>
          <div className="form-grid">
            <label>
              Categoria *
              <select name="category" defaultValue={emptyItemForm.category} required>
                <option value="">Selecione</option>
                {categories.filter((item) => item !== 'Todos').map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label>
              {isFound ? 'Data em que foi encontrado' : 'Data aproximada da perda'}
              <input name="date" type="date" defaultValue={emptyItemForm.date} />
            </label>
          </div>

          <label>
            Descrição *
            <textarea
              name="description"
              rows="5"
              placeholder="Descreva cor, marca, sinais, tamanho e detalhes importantes."
              required
            />
          </label>

          <label>
            {isFound ? 'Local onde foi encontrado *' : 'Local provável de perda *'}
            <input name="location" placeholder="Ex.: biblioteca, sala 07 bloco 01" required />
          </label>

          {isFound && (
            <label>
              Local onde o item está guardado *
              <select name="currentLocation" defaultValue={emptyItemForm.currentLocation} required>
                <option>Comigo</option>
                <option>Com a segurança</option>
              </select>
            </label>
          )}

          <label>
            Foto do item
            <input name="imageName" type="file" accept="image/*" />
          </label>

          <div className="form-actions">
            <button type="button" className="secondary-button" onClick={() => navigate('home')}>
              Cancelar
            </button>
            <button type="submit" className="primary-button compact">
              Salvar
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

function DetailsScreen({ item, navigate, onClaim }) {
  const canClaim = item.status === 'Encontrado'

  return (
    <main className="detail-page">
      <section className="detail-layout">
        <div className="detail-media">
          <img src={item.image} alt={item.title} />
        </div>

        <div className="detail-panel">
          <span className="category-chip">{item.category}</span>
          <h1>{item.title}</h1>
          <p className="detail-status">{item.status}</p>
          <p>{item.details}</p>

          <dl className="info-list">
            <div>
              <dt>Local</dt>
              <dd>{item.location}</dd>
            </div>
            <div>
              <dt>Data</dt>
              <dd>{item.note}</dd>
            </div>
            <div>
              <dt>Contato</dt>
              <dd>{item.contact}</dd>
            </div>
            {item.currentLocation && (
              <div>
                <dt>Guardado em</dt>
                <dd>{item.currentLocation}</dd>
              </div>
            )}
          </dl>

          {canClaim ? (
            <form className="claim-box" onSubmit={onClaim}>
              <label>
                Característica não visível na foto
                <textarea
                  name="confirmation"
                  rows="4"
                  placeholder="Ex.: adesivo interno, nome escrito, defeito específico..."
                />
              </label>
              <button type="submit" className="primary-button compact">
                Confirmar Reivindicação
              </button>
            </form>
          ) : (
            <p className="muted-box">A reivindicação só fica disponível para itens encontrados aguardando dono.</p>
          )}

          <button type="button" className="secondary-button" onClick={() => navigate('home')}>
            Voltar aos anúncios
          </button>
        </div>
      </section>
    </main>
  )
}

function MatchesScreen({ item, items, navigate, openItem }) {
  const matches = items.filter(
    (candidate) =>
      candidate.id !== item.id &&
      candidate.category === item.category &&
      candidate.status !== item.status &&
      candidate.status !== 'Devolvido',
  )

  return (
    <main className="items-section page-offset">
      <div className="items-header">
        <div>
          <h2>Possíveis correspondências</h2>
          <p>{matches.length} itens compatíveis encontrados</p>
        </div>
        <button type="button" className="secondary-button" onClick={() => navigate('home')}>
          Ir para início
        </button>
      </div>

      {matches.length > 0 ? (
        <div className="cards-grid">
          {matches.map((match) => (
            <ItemCard key={match.id} item={match} onOpen={() => openItem(match)} />
          ))}
        </div>
      ) : (
        <EmptyState navigate={navigate} />
      )}
    </main>
  )
}

function MyItemsScreen({ claims, items, user, navigate, openItem, confirmReturn }) {
  const myItems = items.filter((item) => item.contact === user?.email || item.owner === user?.name)
  const activeClaims = claims.filter((claim) => claim.active)

  return (
    <main className="items-section page-offset">
      <div className="items-header">
        <div>
          <h2>Meus Itens</h2>
          <p>Gerencie cadastros, reivindicações e devoluções.</p>
        </div>
        <button type="button" className="primary-button" onClick={() => navigate('register-found')}>
          Registrar Item Encontrado
        </button>
      </div>

      <section className="management-grid">
        <div className="management-card">
          <h3>Reivindicações ativas</h3>
          {activeClaims.length > 0 ? (
            activeClaims.map((claim) => {
              const item = items.find((candidate) => candidate.id === claim.itemId)
              return (
                <div className="claim-row" key={`${claim.itemId}-${claim.createdAt}`}>
                  <div>
                    <strong>{item?.title}</strong>
                    <p>{claim.confirmation}</p>
                    <span>{claim.createdAt}</span>
                  </div>
                  <button type="button" className="secondary-button" onClick={() => confirmReturn(claim.itemId)}>
                    Confirmar Devolução
                  </button>
                </div>
              )
            })
          ) : (
            <p className="muted-box">Nenhuma reivindicação ativa no momento.</p>
          )}
        </div>

        <div className="management-card">
          <h3>Itens cadastrados por você</h3>
          <div className="mini-list">
            {myItems.map((item) => (
              <button key={item.id} type="button" onClick={() => openItem(item)}>
                <img src={item.image} alt="" />
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.status}</small>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function EmptyState({ navigate }) {
  return (
    <div className="empty-state">
      <h3>Nenhum item encontrado para sua busca.</h3>
      <p>Amplie os filtros ou registre o item como perdido para receber possíveis correspondências.</p>
      <button type="button" className="primary-button compact" onClick={() => navigate('register-lost')}>
        Registrar Item Perdido
      </button>
    </div>
  )
}

function Footer() {
  return (
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
          <a href="#inicio">FAQ</a>
          <a href="#inicio">Início</a>
          <a href="#inicio">Anunciar Item</a>
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
  )
}

export default App
