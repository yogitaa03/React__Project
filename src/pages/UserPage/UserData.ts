import grid__img1 from "../../assets/images/grid__img1.png"
import grid__img2 from "../../assets/images/grid__img2.png"
import grid__img3 from "../../assets/images/grid__img3.png"
import grid__img4 from "../../assets/images/grid__img4.png"


export interface DefaultData {

    Img_URL: string
    name: string
    country: string
    rating: any
    id: number
    password: string

}

const data: DefaultData[] = [
    {
        Img_URL: grid__img1, name: 'Chris', country: 'Korea', rating: 5, id: 0, password: "Password"
    },
    {
        Img_URL: grid__img2, name: 'Alia', country: 'India', rating: 4, id: 1, password: "Password"
    },
    {
        Img_URL: grid__img3, name: 'Emma', country: 'America', rating: 4, id: 2, password: "Password"
    },
    {
        Img_URL: grid__img4, name: 'Watson', country: 'Thailand', rating: 3, id: 3, password: "Password"
    }
]

export default data