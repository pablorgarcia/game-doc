import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { numberGreaterThanZero, undefinedValidator } from './form-validators'
import gamesService from '../../services/games-service'
import './form-crud.css'

type Inputs = {
  name: string,
  image: string,
  companyid: string,
  consoleid: string,
  amount: number,
  description: string,
  gendergameid: string,
  regiongameid: string,
  isfavorite: boolean,
  ishack: boolean,
  isphysical: boolean,
  twoplayers: boolean
};

function FormCrud() {

  // gamesService
    
    const { register, control, handleSubmit, formState: { errors } } = useForm<Inputs>({
      defaultValues: {
        amount: 1
      }
    });
    const onSubmit: SubmitHandler<Inputs> = data => {
      
      // const selectedValue: number = Number.parseInt(data.companyid)
      // const options = ["opcion0", "opcion1"]
      // const selectedIndex = options[selectedValue]

      console.log(data)
      // console.log(1, selectedValue, typeof selectedValue)
      // console.log(2, selectedIndex)
    };

    //console.log(watch("example")) // watch input value by passing the name of it

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

          <h2>Guarda un juego nuevo</h2>

          <label>Nombre:
            <input {...register("name", { required: true })} />
            { errors.name?.type === 'required' && <span>Rellena los campos vacios</span>}
          </label>

          <label>Imagen:
            <input {...register("image")} />
          </label>

          <label>Compañia:
            <Controller
              name="companyid"
              control={control}
              render={({ field }) => (
                <select {...field}>
                  <option value={0}>Selecciona</option>
                  <option value={1}>Capcom</option>
                  <option value={2}>Namco</option>
                </select>
              )}
              rules={{ validate: undefinedValidator }}
            />
            { errors.companyid?.type === 'validate' && <span>Rellena los campos vacios</span>}
          </label>

          <label>Consola:
            <Controller
              name="consoleid"
              control={control}
              render={({ field }) => (
                <select {...field}>
                  <option value={0}>Selecciona</option>
                  <option value={1}>Nintendo</option>
                  <option value={2}>Play</option>
                </select>
              )}
              rules={{ validate: undefinedValidator }}
            />
            { errors.consoleid?.type === 'validate' && <span>Rellena los campos vacios</span>}
          </label>

          <label>Region:
            <Controller
              name="regiongameid"
              control={control}
              render={({ field }) => (
                <select {...field}>
                  <option value={0}>Selecciona</option>
                  <option value={1}>Pal</option>
                  <option value={2}>Ntsc</option>
                </select>
              )}
              rules={{ validate: undefinedValidator }}
            />
            { errors.regiongameid?.type === 'validate' && <span>Rellena los campos vacios</span>}
          </label>

          <label>Cantidad:
            <input type='number' {...register("amount", {validate: numberGreaterThanZero})} />
            { errors.amount?.type === 'validate' && <span>Rellena los campos vacios</span>}
          </label>

          <label>Description:
            <input {...register("description")} />
          </label>

          <label>Género:
            <Controller
              name="gendergameid"
              control={control}
              render={({ field }) => (
                <select {...field}>
                  <option value={0}>Selecciona</option>
                  <option value={1}>Nintendo</option>
                  <option value={2}>Play</option>
                </select>
              )}
              rules={{ validate: undefinedValidator }}
            />
            { errors.gendergameid?.type === 'validate' && <span>Rellena los campos vacios</span>}
          </label>

          {/* BULEANO */}
          <label>Favorito:
            <input type='checkbox' {...register("isfavorite")} />
          </label>

          {/* BULEANO */}
          <label>Hack:
            <input type='checkbox' {...register("ishack")} />
          </label>

          {/* BULEANO */}
          <label>Físico:
            <input type='checkbox' {...register("isphysical")} />
          </label>

          {/* BULEANO */}
          <label>2 jugadores:
            <input type='checkbox' {...register("twoplayers")} />
          </label>




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