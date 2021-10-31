import { useContext } from "react"
import { ServiceContext } from "../contexts/ServiceProvider"

const useService= () => {
    return useContext(ServiceContext);
}

export default useService;