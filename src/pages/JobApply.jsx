import React, { use} from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams();
    const {user} = use(AuthContext)
    // const [formData, setFormData] = useState({
    //     linkedin: '',
    //     github: '',
    //     resume: '',
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prev => ({ ...prev, [name]: value }));
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        const linkedin = e.target.linkedin.value 
        const github = e.target.github.value 
        const resume = e.target.resume.value 
        console.log(linkedin , github , resume);

        const application = {
            jobId ,
            applicant : user.email  ,
            linkedin,
            github ,
            resume
        }
        axios.post('http://localhost:5000/applications' , application)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your applications has been submitted",
                    showConfirmButton: false,
                    timer: 1500
                    });
                }
            })
            .catch(error =>{
                console.log(error);
            })
    };

    return (
        <div className="max-w-xl mx-auto p-6 mt-10 bg-white dark:bg-gray-900 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Apply for Job ID: {jobId}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="linkedin" className="block text-gray-700 dark:text-gray-200 mb-1">LinkedIn Profile Link</label>
                    <input
                        type="url"
                        name="linkedin"
                        id="linkedin"
                        placeholder="https://linkedin.com/in/your-profile"
                        // value={formData.linkedin}
                        // onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="github" className="block text-gray-700 dark:text-gray-200 mb-1">GitHub Profile Link</label>
                    <input
                        type="url"
                        name="github"
                        id="github"
                        placeholder="https://github.com/your-username"
                        // value={formData.github}
                        // onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="resume" className="block text-gray-700 dark:text-gray-200 mb-1">Resume Link</label>
                    <input
                        type="url"
                        name="resume"
                        id="resume"
                        placeholder="https://drive.google.com/..."
                        // value={formData.resume}
                        // onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default JobApply;
