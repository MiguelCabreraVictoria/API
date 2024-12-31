# Understanding API concepts

### RESTful API

- RESTful API in an interface that two computers systems use to exchange information securely over the internet.
- Follow secure, reliable, and efficient software communication standards.


### API

- Defines the rules that you must follow to communicate with other software systems
- A gateway between clients and resourcers on the web

- Client: 
  - Users who want to access information from the web
  - Can be a person or a software system

- Resources:
  - Information that different applications provide to their clients
  - Images, videos, text, numbers
  - The server is the machine that gives the resources to the client
  - Security, control, and authentication 

### REST

- Representational State Transfer
- Software architecture that imposes conditions on how API should work
- Guideline to manage communication on complex networks
- Support high performing and reliable communication at scale

- Uniform Interface
  - Indicates the server transfers information in a standard format.
  - The formatted resource is called a representation in REST
  - Request should indentify resources. They do so by using a uniform resource identifier
  - Clients have enought information in the resources representation to modify or delete the resources if they want to.
  - Clients receive information about how to process the representation further. Ther server achieves this by sending self-descriptive messages that contain metadata abour how the client can best use them.
  - Clients receice information about all other related resources they need to complete a task. The server archieves this by sending hyperlinks in the representation so that clients can dynamically discover more resources

- Statelessness
  - Communication method in which a server completes every client request independently of all previous requests.
  - Clients can requese resources in any order, and every request is stateless or isolated from other request

- Layered system
  - The client can connect to other authorizes intermediaries between the client and server, and it will still receie responses from the server
  - Severs can pass on request to other servers, these layers remain invisible to the client

- Cacheability
  - Support caching 
  - Process of storing some responses on the client or on an intermediary to improve server response time

- Code on demand
  - Servers can temporarily extend or customize client functionality by transferring software programming code to the client.


### Benefits

- Scalability 
  - Can scale efficiently because REST optimizes client-server interactions
  - Statelessness removes server load because the server does not have to ratain past clients request information
  - Well-managed caching partially or completely eliminates some client-server interactions

- Flexibily
  - Support total client-server separation
  - They simplify and decouple varios server components so that each part can envolve independently
  - Platform or technology changes at the server application do not affect the client application.
  - The ability to layer application function increases flexibily ever further.

- Indepedence
  - Are independent of the technology used 
  - You can write both client or server application in vaious programming languages without affecting the API design
  
