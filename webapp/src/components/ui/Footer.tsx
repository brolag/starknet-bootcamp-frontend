      export default function Footer() {
        return (
          <footer className="mt-8 py-6 bg-gray-900 text-white">
            <div className="container mx-auto flex justify-center space-x-6">
              <a href="https://starknet.io/docs" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">Starknet Docs</a>
              <a href="https://starknet-react.com/docs/getting-started" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">Starknet React Docs</a>
            </div>
          </footer>
        );
      }