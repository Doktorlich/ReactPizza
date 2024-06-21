export  const [searchState, setSearchState] = useState("");
    useEffect(() => {
        const timer = setTimeout(() => {
            setValueSearch(searchState);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchState, setValueSearch]);

    const changeValueSearchHandler = event => {
        setSearchState(event.target.value);
    };