import { motion } from "framer-motion";

const Education = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">  
            <motion.h1 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Education
            </motion.h1>
  
            <div className="space-y-8">
                <motion.div 
                    whileInView={{ y: 0, opacity: 1 }}
                    initial={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center"
                >
                    <h3 className="text-xl font-semibold">BEng (Hons) in Software Engineering</h3>
                    <p className="text-white-200">London Met University UK (ESOFT Metro Campus)</p>
                    <p className="text-gray-400">2023 - 2024</p>
                </motion.div>

                <motion.div 
                    whileInView={{ y: 0, opacity: 1 }}
                    initial={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center"
                >
                    <h3 className="text-xl font-semibold">HND in Software Engineering</h3>
                    <p className="text-white-200">BCAS Kalmunai Campus (Pearson College London)</p>
                    <p className="text-gray-400">2021 - 2023</p>
                </motion.div>

                <motion.div 
                    whileInView={{ y: 0, opacity: 1 }}
                    initial={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center"
                >
                    <h3 className="text-xl font-semibold">Diploma in Computer Application and Web (Equivalent to ICDL)</h3>
                    <p className="text-white-200">IDM Kalmunai Campus</p>
                    <p className="text-gray-400">2017 - 2018</p>
                </motion.div>

                <motion.div 
                    whileInView={{ y: 0, opacity: 1 }}
                    initial={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center"
                >
                    <h3 className="text-xl font-semibold"> E-plus Certified Office Application Expert</h3>
                    <p className="text-white-200">E-Plus Exams</p>
                    <p className="text-gray-400">2018</p>
                </motion.div>

                <motion.div 
                    whileInView={{ y: 0, opacity: 1 }}
                    initial={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center"
                >
                    <h3 className="text-xl font-semibold">Mobile Phone Repairing Technician</h3>
                    <p className="text-white-200">Sri Lanka Youth Center Sainthamaruthu</p>
                    <p className="text-gray-400">2021 (6-Months)</p>
                </motion.div>
  
                <motion.div 
                    whileInView={{ y: 0, opacity: 1 }}
                    initial={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center"
                >
                    <h3 className="text-xl font-semibold">GCE Advanced Level (Bio System Technology)</h3>
                    <p className="text-white-200">KM/KM Zahira College Kalmunai, SRI LANKA</p>
                    <p className="text-gray-400">2018 - 2020</p>
                </motion.div>
  
                <motion.div 
                    whileInView={{ y: 0, opacity: 1 }}
                    initial={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center"
                >
                    <h3 className="text-xl font-semibold">GCE Ordinary Level</h3>
                    <p className="text-white-200">KM/KM Zahira College Kalmunai, SRI LANKA</p>
                    <p className="text-gray-400">2012 - 2017</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Education;
