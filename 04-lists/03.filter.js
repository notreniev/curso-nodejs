const { obterPessoas } = require('./service')

Array.prototype.meufilter = function(callback){
    const lista = []
    for (index in this){
        const item = this[index]
        const result = callback(item, index, this)
        // 0, "", null, unefined === false
        if(!result) continue
        lista.push(item)
    }

    return lista
}

async function main(){
    try {
        const { results } = await obterPessoas(`a`)
        //const familiaLars = results.meu(item => item.name.toLowerCase().indexOf(`lars`) !== -1 )

        const familiaLars = results.meufilter((item, index, lista) => {
            console.log(`index: ${index}`, lista.length)
            item.name.toLowerCase().indexOf(`lars`) !== -1
        })

        const names = familiaLars.map(pessoa => pessoa.name)

        console.log(`names`, names)
    } catch (error) {
        console.error(error)
    }
}

main()