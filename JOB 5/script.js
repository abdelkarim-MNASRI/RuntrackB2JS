function myPrimeList(limit) {

    function myPrimeList(limit) {
        var primes = [];
    
        // Fonction pour vérifier si un nombre est premier
        function isPrime(num) {
            if (num <= 1) return false;
            if (num <= 3) return true;
            if (num % 2 === 0 || num % 3 === 0) return false;
            
            for (var i = 5; i * i <= num; i += 6) {
                if (num % i === 0 || num % (i + 2) === 0) return false;
            }
            
            return true;
        }
    
        // Ajouter les nombres premiers dans la liste
        for (var i = 2; i <= limit; i++) {
            if (isPrime(i)) {
                primes.push(i);
            }
        }
    
        return primes;
    }
    
    var result = myPrimeList(18);
    console.log(result); // Affiche [2, 3, 5, 7, 11, 13, 17]
;}
