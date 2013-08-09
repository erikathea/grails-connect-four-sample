class UrlMappings {

	static mappings = {
		"/$controller/$action?/$id?"{
			constraints {
				// apply constraints here
			}
		}

		"/"(view:"/connect/index") {
			controller =  "connect"
		}
		"500"(view:'/error')
	}
}
