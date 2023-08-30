import './form-crud.css' 
import { useForm, SubmitHandler } from "react-hook-form"
import GamesService from '../../services/games-service'
import ConsolesService from '../../services/consoles-service'


type Inputs = {
  isgame: boolean,
  name: string,
  companyid: number,
  consoleid: number,
  count: number,
  description: string,
  gendergameid: string,
  isfavorite: boolean,
  ishack: boolean,
  isphysical: boolean,
  twoplayers: boolean
};

function FormCrud() {
    // VAMOS A SUBIR O UN JUEGO O UNA CONSOLA
    // ENTRA POR PARAMETROS: ES JUEGO || ES CONSOLA
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    //console.log(watch("example")) // watch input value by passing the name of it

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* dependiendo de la opcion, activa los inputs de game o los de console */}
          {/* ESTO TIENE QUE DEVOLVER UN BULEANO */}
          <label>Selecciona que quieres subir
            <select {...register("isgame")}>
              <option defaultChecked={true}>Game</option>
              <option defaultChecked={false}>Console</option>
            </select>
          </label>

          <label>Nombre:
            <input {...register("name", { required: true })} />
          </label>
          
          <label>Company id
            <input {...register("companyid")} />
          </label>

          <label>console id
            <input {...register("consoleid", { required: true })} />
          </label>
          
          <label>count
            <input type='number' {...register("count", { required: true })} />
          </label>

          <label>description
            <input {...register("description")} />
          </label>

          <label>genero id
            <input {...register("gendergameid", { required: true })} />
          </label>

          {/* BULEANO */}
          <label>favorito
            <input type='boolean' {...register("isfavorite")} />
          </label>

          {/* BULEANO */}
          <label>hack
            <input {...register("ishack")} />
          </label>

          {/* BULEANO */}
          <label>fisico
            <input {...register("isphysical")} />
          </label>

          {/* BULEANO */}
          <label>2 players
            <input {...register("twoplayers")} />
          </label>

          {errors.name && <span>This field is required</span>}
          <input type="submit" />
        </form>
      );
}

export default FormCrud

/*
    GAME
            companyId
            consoleId
            count
            description
            genderGameId
            image
            isFavorite
            isHack
            isPhysical
            name
            twoPlayers
        CONSOLA 
            accessoryConsoleId
            companyId
            cost
            count
            description
            image
            mods
            name
            regionConsoleId
            serialNumber
     */