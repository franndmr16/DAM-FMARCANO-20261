import { User } from "core/entities";
import { UserRepository } from "core/repositories";
import AuthRepository from "core/repositories/AuthRepository/AuthRepository";

const AuthService = {
    
    register: async (user: User): Promise<User>  => {
        const userExist = UserRepository.fidnByUsername(user.username);
        
        if(userExist){
            console.error(`Usuario con username ya existe: ${user.username}, ya existe`);
            throw new Error('EL usuario ya existe')
        }

        const id = UserRepository.create(user);

        if(id == undefined){
            console.error(`Usuario con username ${user.username}, ya existe`);
            throw new Error('EL usuario no se pudo crear')

        }
        const newUser = {...user,id};

        await AuthRepository.save(user);
        
        return newUser;

    },
}
export default AuthService
//screen no se comunica con el repositorio