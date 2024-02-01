function ClienteBase(nome, clienteID) {
    this.nome = nome;
    this.clienteID = clienteID;
}

function ClienteDadosPessoais(nome, clienteID, RG, CPF, CEP) {
    let _RG = RG;
    let _CPF = CPF;
    let _CEP = CEP;

    this.getRG = function() {
        return _RG;
    }

    this.getCPF = function() {
        return _CPF;
    }

    this.getCEP = function() {
        return _CEP;
    }

    ClienteBase.call(this, nome, clienteID);
}

function ClienteDadosBancarios(nome, clienteID, CPF, RG, saldoNaConta) {
    let _saldoNaConta = saldoNaConta;

    this.getSaldo = function() {
        return _saldoNaConta;
    }

    this.setSaldo = function(valor) {
        if (typeof valor === 'number') {
            _saldoNaConta = valor;
        }
    }

    ClienteDadosPessoais.call(this, nome, clienteID, CPF, RG);
}

const cliente1 = new ClienteDadosBancarios('Pamela', '18354265', '987654321', '432852');
const cliente2 = new ClienteDadosBancarios('Romario', '98354217', '745261489', '128109');
const cliente3 = new ClienteDadosBancarios('Maria', '73342127', '524567280', '87543');
