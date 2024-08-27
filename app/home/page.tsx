import Image from "next/image";

export default function Home() {
  return (
    <>
        <div className="bg-cyan-50 rounded-xl p-6 shadow-brutal mb-8 border border-black">
            <h2 className="text-6xl my-32 text-center">BANNER</h2>
        </div>

        <div className="bg-orange-100 rounded-xl p-6 shadow-brutal border border-black mb-8">
            <h2 className="text-3xl font-bold tracking-wider mb-4">La storia</h2>
            <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie enim vitae sem facilisis aliquam. Ut id consectetur justo, id luctus urna. Integer non velit eu turpis tristique tempor. Ut nisi quam, finibus at ipsum at, egestas gravida nibh. Aenean eget nulla sollicitudin, pharetra felis quis, vehicula mauris. Aenean interdum ut dolor id viverra. Nulla rutrum leo vel libero accumsan, tempus malesuada quam viverra. Integer dictum venenatis justo, at congue libero efficitur vel. In sed ipsum in magna euismod auctor. Sed vestibulum risus faucibus justo iaculis pellentesque.</p>

            <p className="mb-2">Phasellus a posuere purus. Aliquam vel faucibus lectus. Praesent rhoncus pulvinar tellus quis mollis. Cras efficitur neque quis enim iaculis, commodo ultricies lorem finibus. Sed posuere arcu ac orci sagittis semper. Phasellus vitae aliquam leo. Quisque ut lorem at magna ultricies viverra sit amet in tortor. Nam ex ante, lobortis ut velit quis, lobortis gravida magna. Nulla id sapien molestie, varius nulla vel, gravida sem. Morbi auctor, justo a faucibus placerat, turpis augue molestie arcu, eu scelerisque augue odio sed felis. Curabitur quam arcu, euismod ut lacus ut, commodo fermentum lacus. Donec pharetra dapibus nibh, ac aliquam magna facilisis consequat. Quisque semper consectetur sodales. Quisque dui dui, interdum vitae arcu vitae, auctor dapibus mauris. Quisque id accumsan felis.</p>

            <p className="mb-2">Proin et tempus ipsum. Etiam euismod vestibulum urna nec porttitor. Integer non lacus et mi placerat eleifend vitae at nulla. Vivamus in risus rutrum, imperdiet elit at, tempus nisl. Maecenas bibendum maximus velit, aliquam auctor elit blandit et. Nunc feugiat eros eu ipsum finibus placerat. Sed vel turpis in sapien porta placerat. Maecenas et augue eget nisi ornare vehicula.</p>
        </div>

        <div className="bg-sky-100 rounded-xl p-6 shadow-brutal border border-black mb-8">
            <h2 className="text-3xl font-bold tracking-wider mb-4">La ricetta</h2>
            <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie enim vitae sem facilisis aliquam. Ut id consectetur justo, id luctus urna. Integer non velit eu turpis tristique tempor. Ut nisi quam, finibus at ipsum at, egestas gravida nibh. Aenean eget nulla sollicitudin, pharetra felis quis, vehicula mauris. Aenean interdum ut dolor id viverra. Nulla rutrum leo vel libero accumsan, tempus malesuada quam viverra. Integer dictum venenatis justo, at congue libero efficitur vel. In sed ipsum in magna euismod auctor. Sed vestibulum risus faucibus justo iaculis pellentesque.</p>

            <p className="mb-2">Phasellus a posuere purus. Aliquam vel faucibus lectus. Praesent rhoncus pulvinar tellus quis mollis. Cras efficitur neque quis enim iaculis, commodo ultricies lorem finibus. Sed posuere arcu ac orci sagittis semper. Phasellus vitae aliquam leo. Quisque ut lorem at magna ultricies viverra sit amet in tortor. Nam ex ante, lobortis ut velit quis, lobortis gravida magna. Nulla id sapien molestie, varius nulla vel, gravida sem. Morbi auctor, justo a faucibus placerat, turpis augue molestie arcu, eu scelerisque augue odio sed felis. Curabitur quam arcu, euismod ut lacus ut, commodo fermentum lacus. Donec pharetra dapibus nibh, ac aliquam magna facilisis consequat. Quisque semper consectetur sodales. Quisque dui dui, interdum vitae arcu vitae, auctor dapibus mauris. Quisque id accumsan felis.</p>

            <p className="mb-2">Proin et tempus ipsum. Etiam euismod vestibulum urna nec porttitor. Integer non lacus et mi placerat eleifend vitae at nulla. Vivamus in risus rutrum, imperdiet elit at, tempus nisl. Maecenas bibendum maximus velit, aliquam auctor elit blandit et. Nunc feugiat eros eu ipsum finibus placerat. Sed vel turpis in sapien porta placerat. Maecenas et augue eget nisi ornare vehicula.</p>
        </div>

        <div className="bg-violet-100 rounded-xl p-6 shadow-brutal border border-black">
            <h2 className="text-3xl font-bold tracking-wider mb-4">Acquista</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="border border-black rounded-xl p-4 shadow-brutal bg-white">
                    <div className="h-72 bg-gray-300 rounded-lg mb-2"></div>
                    <h3 className="text-lg font-bold">Prodotto</h3>
                    <p className="font-light mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie enim vitae sem facilisis aliquam.</p>
                    <button type="button" className="bg-violet-500 text-white px-4 py-2 rounded-full font-semibold shadow-brutal shadow-black border border-black w-full">Compra ora</button>
                </div>
                <div className="border border-black rounded-xl p-4 shadow-brutal bg-white">
                    <div className="h-72 bg-gray-300 rounded-lg mb-2"></div>
                    <h3 className="text-lg font-bold">Prodotto</h3>
                    <p className="font-light mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie enim vitae sem facilisis aliquam.</p>
                    <button type="button" className="bg-violet-500 text-white px-4 py-2 rounded-full font-semibold shadow-brutal shadow-black border border-black w-full">Compra ora</button>
                </div>
                <div className="border border-black rounded-xl p-4 shadow-brutal bg-white">
                    <div className="h-72 bg-gray-300 rounded-lg mb-2"></div>
                    <h3 className="text-lg font-bold">Prodotto</h3>
                    <p className="font-light mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie enim vitae sem facilisis aliquam.</p>
                    <button type="button" className="bg-violet-500 text-white px-4 py-2 rounded-full font-semibold shadow-brutal shadow-black border border-black w-full">Compra ora</button>
                </div>
            </div>
        </div>
    </>
  );
}
