module.exports = {
    cli: {
        core: {
            run: {
                plugins: {
                    include: [
                        "@bcdiploma/certificate-manager"
                    ],
                },
            },
        },
        relay: {
            run: {
                plugins: {
                    include: [
                        "@bcdiploma/certificate-manager"
                    ],
                },
            },
        },
        forger: {
            run: {
                plugins: {
                    include: [
                        "@bcdiploma/certificate-manager"
                    ],
                },
            },
        },
        chain: {
            run: {
                plugins: {
                    include: [
                        "@bcdiploma/certificate-manager"
                    ],
                },
            },
        },
        snapshot: {
            run: {
                plugins: {
                    include: [
                        "@bcdiploma/certificate-manager"
                    ],
                },
            },
        },
    },
};
