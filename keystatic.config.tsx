/**
 * Default keystatic config file
 * @example https://keystatic.com/docs/installation-astro
 */
import { config, fields, collection } from "@keystatic/core"

export default config({
    locale: "es-ES",
    storage: {
        kind: "local"
    },
    collections: {
        posts: collection({
            label: "Posts",
            slugField: "title",
            path: "src/content/posts/*",
            format: { data: "json" },
            columns: ["image", "title", "instagram", "category"],
            schema: {
                title: fields.slug({ name: { label: "Titulo", description: "Titulo de tu publicación" } }),
                instagram: fields.text({ label: "Enlace de instagram", description: "Enlace al posts realizado en instragram" }),
                image: fields.image({ 
                    label: "Imagen", 
                    description: "Imagen del posts", 
                    directory: "public/assets/posts",
                    publicPath: "/assets/posts/"
                }),
                category: fields.relationship({
                    label: "Categoria",
                    description: "Que tipo de trabajo has realizado.",
                    collection: "categories",
                    validation: { isRequired: true }
                })
            }
        }),
        categories: collection({
            label: "Categorias",
            slugField: "name",
            path: "src/content/categories/*",
            columns: ["name", "description"],
            format: { data: "json" },
            schema: {
                name: fields.slug({ name: { label: "Nombre", description: "Nombre de la categoria" } }),
                description: fields.text({ label: "Descripción", description: "Descripción de la categoria" })
            },
        })
    },
    ui: {
        brand: {
            name: "The New Flex Studio Record",
            mark: () => (<img height={42} width={42} src="/assets/logo.svg" alt="Logo" />)
        }
    }
})