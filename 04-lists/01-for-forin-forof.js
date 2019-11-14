const service = require('./service')

async function main() {
    try {
        const result = await service.obterPessoas('a')
        const names = []

        console.time("for")
        for (let i = 0; i <= result.results.length - 1; i++) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd("for")

        console.time("forin")
        for (let i in result.results) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd("forin")

        console.time("forof")
        for (pessoa of result.results) {
            names.push(pessoa.name)
        }
        console.timeEnd("forof")

        console.time("formap")
        result.results.map(pessoa => names.push(pessoa.name))
        console.timeEnd("formap")

        console.log(`names`, names)
    } catch (error) {
        console.error('erro interno', error)
    }
}

main()

// Complete the plusMinus function below.
/*
let arr = [-4, 3, -9, 0, 4, 1]
function plusMinus(arr) {
    let positives = 0
    let negatives = 0
    let zeros = 0
    for (let i in arr) {
        const elem = arr[i]
        elem > 0 ? positives++ : 0
        elem < 0 ? negatives++ : 0
        elem === 0 ? zeros++ : 0
    }

    positives = (positives/arr.length).toFixed(6)
    negatives = (negatives/arr.length).toFixed(6)
    zeros = (zeros/arr.length).toFixed(6)

    console.log(positives)
    console.log(negatives)
    console.log(zeros)
}

plusMinus(arr)
*/