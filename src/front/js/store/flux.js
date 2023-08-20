const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			login: async (email, password) => {
				const opts = {
					method: 'POST',
					headers:{
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"email": email,
						"password": password
					})
				} 
				try{
					const resp = await fetch('https://probable-chainsaw-rjprvx5vjqq3xrg6-3001.app.github.dev/api/token', opts)
					if(resp.status !== 200) {
					alert("There has been some error")
					return false
					}
					const data = await resp.json()
					console.log("This came from the backend", data)
					localStorage.setItem("token", data.access_token)
					setStore({token: data.access_token})
					return true
				}
				catch(error){console.error("There has been an error login in")}	
			},
			sync_token_from_local_storage: () => {
				const token = localStorage.getItem("token")
				console.log("You are login out successfully!!!!!!!!")
				if(token && token != "" && token != undefined) setStore({token: token})
			},
			logout: () => {
				const token = localStorage.removeItem("token")
				console.log("APlication just loaded synching the local Storage Token")
				setStore({token: null})
			},
			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
