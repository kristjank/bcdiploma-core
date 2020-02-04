module.exports = {
    cli: {
        core: {
            run: {
                plugins: {
                    include: [
                        "@arkecosystem/core-magistrate-transactions",
                        "@bcdiploma/certificate-manager"
                    ],
                },
            },
        },
        relay: {
            run: {
                plugins: {
                    include: [
                        "@arkecosystem/core-magistrate-transactions",
                        "@bcdiploma/certificate-manager"
                    ],
                },
            },
        },
        forger: {
            run: {
                plugins: {
                    include: [
                        "@arkecosystem/core-magistrate-transactions",
                        "@bcdiploma/certificate-manager"
                    ],
                },
            },
        },
        chain: {
            run: {
                plugins: {
                    include: [
                        "@arkecosystem/core-magistrate-transactions",
                        "@bcdiploma/certificate-manager"
                    ],
                },
            },
        },
        snapshot: {
            run: {
                plugins: {
                    include: [
                        "@arkecosystem/core-magistrate-transactions",
                        "@bcdiploma/certificate-manager"
                    ],
                },
            },
        },
    },
}
