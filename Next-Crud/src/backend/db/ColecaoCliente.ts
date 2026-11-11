import { db } from '@/backend/config'
import Cliente from '@/core/Cliente'
import ClienteRepositorio from '@/core/ClienteRepositorio'
import { collection, doc, setDoc, addDoc, deleteDoc, getDoc, DocumentData, QueryDocumentSnapshot, getDocs } from 'firebase/firestore'

export default class ColecaoCliente implements ClienteRepositorio {
    private conversor = {
        toFirestore(cliente: Cliente): DocumentData {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
        fromFirestore(snapshot: QueryDocumentSnapshot<DocumentData>): Cliente {
            const dados = snapshot.data()
            return {
                id: snapshot.id,
                nome: dados.nome,
                idade: dados.idade,
            }
        }
    }

    private colecao() {
        return collection(db, "clientes").withConverter(this.conversor)
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        if(cliente?.id) {
            const docRef = doc(db,"clientes", cliente.id).withConverter(this.conversor)
            await setDoc(docRef, cliente)
            return cliente
        } else {
            const docRef = await addDoc(this.colecao(), cliente)
            return {...cliente, id: docRef.id}
        }
    } 

    async excluir(cliente: Cliente): Promise<void> {
        if(!cliente.id) return 
        const docRef = doc(db, "clientes", cliente.id)
        await deleteDoc(docRef)
    }

    async obterTodos(): Promise<Cliente[]> {
        const querySnapshot = await getDocs(this.colecao())
        return querySnapshot.docs.map(doc => doc.data()) ?? []
    }
}