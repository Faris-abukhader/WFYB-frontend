import { CustomModel } from '../general/general'
import { getTranslatedText as translate} from '../../localization/config'

export default function ProjectListModel({data, show, toggle, language}){
    const dummyProjects = [
        'Self Driving Robot for Target Shooting Game', 
        'Scan the Reality into the 3D Digital World', 
        'Alva: The Universal Hands-free Lighting Solution',
        'A Unique Analog-Hybrid Monophonic Synthesizer', 
        'Personal All-In-One Home Gym & Workout Coach', 
        'Original Shinecon VR Pro Virtual Reality 3D Glasses']

    return(
        <CustomModel show={show} toggle={toggle} title={translate('projectList', language)} >
            <CustomModel.Body style={`flex flex-col w-full h-80 overflow-auto`}>
                {dummyProjects.map((item) => {
                        return(
                            <div className='flex items-center justify-between w-full h-12 p-6 mb-3
                                        rounded-md bg-gray-100 text-gray-800
                                      hover:bg-green-400 hover:text-white'>
                                <span className='font-medium'>{item}</span>
                                <span className='font-black'>&#62;</span>
                            </div>
                    )})
                }
            </CustomModel.Body>
        </CustomModel>
    )
}
