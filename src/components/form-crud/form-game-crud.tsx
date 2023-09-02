import { useEffect, useState } from 'react'
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { numberGreaterThanZero, undefinedValidator } from './form-validators'

import { addGame, getGames } from '../../services/games-service'
import { getGenderGames } from '../../services/gender-game-service'
import { getCompanyGame } from '../../services/company-game-service'
import { getCompanyConsole } from '../../services/company-console-service'
import { getRegionGame } from '../../services/region-game-service'

import { Game } from '../../interfaces/game'
import { GenderGames } from '../../interfaces/gender-game'
import { CompanyGames } from '../../interfaces/company-game'
import { CompanyConsole } from '../../interfaces/company-console'
import { RegionGame } from '../../interfaces/region-game'

import './form-crud.css'


function FormGameCrud() {
  
  const [games, setGames] = useState<Game[]>([]);
  const [genders, setGender] = useState<GenderGames[]>([]);
  const [companies, setCompanies] = useState<CompanyGames[]>([]);
  const [companiesConsoles, setCompaniesConsole] = useState<CompanyConsole[]>([]);
  const [regionesGames, setRegionGames] = useState<RegionGame[]>([]);

  useEffect(() => {

    const fetchGames = async () => {
      try {
        const gamesData = await getGames();
        setGames(gamesData);
        console.log(1, gamesData);
      } catch (error) {
        console.log('error fetchGames', error)
      }
    }
    const fetchGender = async () => {
      try {
        const genderData = await getGenderGames();
        setGender(genderData);
        console.log(1, genderData);
      } catch (error) {
        console.log('error fetchGender', error)
      }
    }
    const fetchCompany = async () => {
      try {
        const companyData = await getCompanyGame();
        setCompanies(companyData);
        console.log(1, companyData);
      } catch (error) {
        console.log('error fetchCompany', error)
      }
    }
    const fetchCompanyConsoles = async () => {
      try {
        const companyConsoleData = await getCompanyConsole();
        setCompaniesConsole(companyConsoleData);
        console.log(1, companyConsoleData);
      } catch (error) {
        console.log('error fetchCompanyGames', error)
      }
    }
    const fetchRegionGames = async () => {
      try {
        const regionesGames = await getRegionGame();
        setRegionGames(regionesGames);
        console.log(1, regionesGames);
      } catch (error) {
        console.log('error fetchRegionGames', error)
      }
    }

    fetchGames();
    fetchGender();
    fetchCompany();
    fetchCompanyConsoles();
    fetchRegionGames();
  }, []);



  const { register, control, handleSubmit, formState: { errors } } = useForm<Game>({
    defaultValues: {
      amount: 1
    }
  });

  const onSubmit: SubmitHandler<Game> = async (data) => {
    try {
      await addGame(data);
      console.log(data)
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
              {companies[0]?.name.map((company, index) => (
                <option key={index} value={index + 1}>
                  {company}
                </option>
              ))}
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
              {companiesConsoles[0]?.name.map((companyConsole, index) => (
                <option key={index} value={index + 1}>
                  {companyConsole}
                </option>
              ))}
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
              {regionesGames[0]?.region.map((region, index) => (
                <option key={index} value={index + 1}>
                  {region}
                </option>
              ))}
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
              {genders[0]?.name.map((genre, index) => (
                <option key={index} value={index + 1}>
                  {genre}
                </option>
              ))}
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

export default FormGameCrud
