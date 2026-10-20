import { useState } from 'react'
import './App.css'

function App() {
  const myobj = {
    name: "Rajaa",
    n: 16
  };

  const dataAwal =[
    {id: 1, nama:"Nasi Ayam Geprek" , harga: 13700, kategori:"Makanan"},
    {id: 2, nama:"Es Teh Lemon" , harga: 6000, kategori:"Minuman"},
    {id: 3, nama:"Mie Goreng Telur" , harga: 12000, kategori:"Makanan"},
    {id: 4, nama:"Jus Alpukat" , harga:14000, kategori:"Minuman"},
    {id: 5, nama:"Bakso Urat" , harga: 15000, kategori:"Makanan"},
  ]

  const gayaJudul = {color: '#if3a5f'}
  return (
    <>
      <h1 className='.judul' style={{color: "darkblue"}}>Kantin {myobj.name}</h1>
      <p>Selamat pagi</p>
      <p>Saldo awal kartu kantin: Rp {myobj.n * 1000}</p>

      <button
      type='button'
      id='button'
      className='bayar'
      onClick={()=> id='bayar'}>Bayar</button>
    </>
  );
}

export default App;

