'use client';

import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import useClientes from "@/hooks/useClientes";


export default function Home() {

  const { novoCliente, clientes, cliente, saveCliente, clienteSelect, clienteDeleted, tabelaVisivel, exibirTabela } = useClientes()

  return (
    <div className="flex h-screen justify-center items-center bg-linear-to-r from-blue-500 to-purple-600 text-white " >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" onClick={novoCliente}>Novo cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelect={clienteSelect}
              clienteDeleted={clienteDeleted}>
            </Tabela>
          </>
        ) : (
          <Formulario cliente={cliente}
            clienteChange={saveCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  );
}
