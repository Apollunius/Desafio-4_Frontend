
export function fazerRequisicaoComBody(url, metodo, conteudo, token) {
	return fetch(url, {
	  method: metodo,
	  headers: {
		"Content-Type": "application/json",
		Authorization: token && `Bearer ${token}`,
	  },
	  body: JSON.stringify(conteudo),
	});
  }

//   export function apiListarClientes(offset, busca) {
// 	  if(!busca) {
// 		fetch(`http://localhost:8081/clientes?clientesPorPagina=10&offset=${offset}`)
// 		.then(res => res.json())
// 		.then(data => {
// 			console.log(data.dados.clientes)
// 			setDadosClientes(data.dados);
// 		})
// 		.catch(err => {
// 			console.error(err);
// 		})
// 	} else {
// 		fetch(`http://localhost:8081/clientes?busca=${busca}&clientesPorPagina=10&offset=${offset}`)
// 		.then(res => res.json())
// 		.then(data => {
// 			console.log(data.dados.clientes)
// 			setDadosClientes(data.dados);
// 		})
// 		.catch(err => {
// 			console.error(err);
// 		})
// 	}
// };