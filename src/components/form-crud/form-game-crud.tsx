import { useEffect, useState } from 'react'
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { numberGreaterThanZero, undefinedValidator } from './form-validators'

import { addGame, getGames } from '../../services/games-service'
import { getGender } from '../../services/gender-service'
import { getGamesCompany } from '../../services/company-game-service'
import { getRegion } from '../../services/region-service'
import { getConsoleListService } from '../../services/console-list-service'

import { Game } from '../../interfaces/game'
import { Gender } from '../../interfaces/gender'
import { GamesCompany } from '../../interfaces/game-company'
import { ConsoleList } from '../../interfaces/consoleList'
import { Region } from '../../interfaces/region'

import './form-crud.css'


function FormGameCrud() {
  
  const [games, setGames] = useState<Game[]>([]);
  const [genders, setGender] = useState<Gender[]>([]);
  const [companies, setCompanies] = useState<GamesCompany[]>([]);
  const [consoleList, setConsoleList] = useState<ConsoleList[]>([]);
  const [regions, setRegion] = useState<Region[]>([]);

  const [selectedRegion, setSelectedRegion] = useState(""); // Para almacenar la selección de la región
  const [selectedSubregion, setSelectedSubregion] = useState(""); // Para almacenar la subregión seleccionada

  useEffect(() => {

    const fetchGames = async () => {
      try {
        const gamesData = await getGames();
        setGames(gamesData);
      } catch (error) {
        console.log('error fetchGames', error)
      }
    }
    const fetchGender = async () => {
      try {
        const genderData = await getGender();
        setGender(genderData);
      } catch (error) {
        console.log('error fetchGender', error)
      }
    }
    const fetchCompany = async () => {
      try {
        const companyData = await getGamesCompany();
        setCompanies(companyData);
      } catch (error) {
        console.log('error fetchCompany', error)
      }
    }
    const fetchConsoleList = async () => {
      try {
        const consoleNameData = await getConsoleListService();
        setConsoleList(consoleNameData);
      } catch (error) {
        console.log('error fetchConsoles', error)
      }
    }
    const fetchRegion = async () => {
      try {
        const regions = await getRegion();
        setRegion(regions);
      } catch (error) {
        console.log('error fetchRegion', error)
      }
    }

    fetchGames();
    fetchGender();
    fetchCompany();
    fetchConsoleList();
    fetchRegion();
  }, []);



  const { register, control, handleSubmit, formState: { errors } } = useForm<Game>({
    defaultValues: {
      amount: 1
    }
  });

  const onSubmit: SubmitHandler<Game> = async (data) => {
    try {
      await addGame(data);
      console.log('SUBMIT GAME', data)
    } catch (error) {
      console.log('error onsubmit game form', error)
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <h2>Guarda un juego nuevo</h2>

      <label>Nombre:
        <input {...register("name", { required: true })} />
        { errors.name?.type === 'required' && <span>Rellena los campos vacios</span>}
      </label>

      <label>Consola:
      <Controller
          name="consoleId"
          control={control}
          render={({ field }) => (
            <select {...field}>
              <option value={0}>Selecciona</option>
              {consoleList[0]?.name.map((console, index) => (
                <option key={index} value={index + 1}>
                  {console}
                </option>
              ))}
            </select>
          )}
          rules={{ validate: undefinedValidator }}
        />
        { errors.consoleId?.type === 'validate' && <span>Rellena los campos vacios</span>}
      </label>

      <label>Región:
        <Controller
          name="regionId"
          control={control}
          render={({ field }) => (
            <select {...field}>
              {regions.map((region, index) => (
                <option key={index}>
                {index}
              </option>
              ))}
            </select>
          )}
          rules={{ validate: undefinedValidator }}
        />
        {errors.regionId?.type === 'validate' && <span>Rellena los campos vacíos</span>}
      </label>
      
      <label>Género:
      <Controller
          name="genderId"
          control={control}
          render={({ field }) => (
            <select {...field}>
              <option value={0}>Selecciona</option>
              {genders[0]?.name.map((genre, index) => (
                <option key={index} value={index + 1}>
                  {genre}
                </option>
              ))}
            </select>
          )}
          rules={{ validate: undefinedValidator }}
        />
        { errors.genderId?.type === 'validate' && <span>Rellena los campos vacios</span>}
      </label>

      <label>Compañia:
      <Controller
          name="companyId"
          control={control}
          render={({ field }) => (
            <select {...field}>
              <option value={0}>Selecciona</option>
              {companies[0]?.name.map((company, index) => (
                <option key={index} value={index + 1}>
                  {company}
                </option>
              ))}
            </select>
          )}
          rules={{ validate: undefinedValidator }}
        />
        { errors.companyId?.type === 'validate' && <span>Rellena los campos vacios</span>}
      </label>

      <label>Description:
        <input {...register("description")} />
      </label>

      <label>Imagen:
        <input {...register("image")} />
      </label>

      <label>Cantidad:
        <input type='number' {...register("amount", {validate: numberGreaterThanZero})} />
        { errors.amount?.type === 'validate' && <span>Rellena los campos vacios</span>}
      </label>
      
      <label>Favorito:
        <input type='checkbox' {...register("isFavorite")} />
      </label>

      <label>Hack:
        <input type='checkbox' {...register("isHack")} />
      </label>

      <label>Físico:
        <input type='checkbox' {...register("isPhysical")} />
      </label>

      <label>2 jugadores:
        <input type='checkbox' {...register("twoPlayers")} />
      </label>

      <input type="submit" />
    </form>
  );
}

export default FormGameCrud
