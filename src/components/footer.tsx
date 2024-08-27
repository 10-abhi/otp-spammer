import { AnimatePresence, motion } from 'framer-motion';

export const Footer = () => {
  const names = ['Abhijeet', '| ' , 'Abhishek'];

  return (
    <AnimatePresence>
      <div className="h-20 w-full items-center flex gap-2 justify-center bg-transparent text-slate-300 text-xl font-mono font-bold ">
         <div>Contributed By </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="rgb(139,35,75)"
          className="size-6"
        ><path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clip-rule="evenodd" />
        </svg>
        {names.map((name) => (
          <motion.div>
            {name.split('').map((letter, letterIndex) => (
              <motion.span
                key={letterIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration:8 , delay: letterIndex * 0.2 }}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};