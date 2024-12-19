import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import type { FC } from 'hono/jsx';
import { css, cx, keyframes, Style } from 'hono/css';

const app = new Hono();

const DataApp: FC = props => {
    return (
        <html>
            <body >
                <div className="app-content">
                    <h1>Data App</h1>
                    {props.message}
                </div>
            </body>
            <Style>{css`
                * {
                    margin: 0;
                    padding: 0;
                }

                html {
                    font-family: Arial, Helvetica, sans-serif;

                    h1 {
                        color: salmon;
                        margin-bottom: 1rem;
                    }

                    body {
                        display: grid;
                        place-items: center;
                        background-image:  linear-gradient(#156d7750 1px, transparent 1px), linear-gradient(to right, #444df73f 1px, #e5e5f7 1px);
                        background-size: 30px 30px;

                        .app-content {
                            border: 1px solid lightblue;
                            padding: 3rem;
                            border-radius: 1rem;
                            box-shadow: .3rem .3rem .5rem rgba(0,0,0,.2);
                            background-color: white;
                        }
                    }
                }
            `}</Style>
        </html>
    );
};

app.get('/', c => {
    const message = 'I can be data pulled from a db, endpoint, or anywhere';
    // do business logic here - db query, api call etc to get data
    return c.html(<DataApp message={message} />);
});

const port = 3300;
console.log(`Server is running on http://localhost:${port}`);

serve({
    fetch: app.fetch,
    port,
});
