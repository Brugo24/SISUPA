import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-row ">
      <div className="bg-red-500 flex flex-col p-3 w-2/3 h-fit">
          {/*Componente dos posts*/}
          <div className="bg-blue-500 w-full h-fit mb-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="bg-blue-500 w-full h-fit mb-4">
            <p>Praesent felis dolor, aliquet a feugiat sed, placerat at orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque consectetur sem at tempus. Nunc porta ex a aliquam facilisis. Praesent et tincidunt nisi. Fusce volutpat libero aliquam, sodales metus eu, lobortis elit. Curabitur mattis in nibh in fermentum. Proin non dui luctus, ultrices tortor vitae, dapibus enim. Aenean vitae laoreet ante, at ullamcorper nibh. Phasellus dictum efficitur mi, in ullamcorper nisl tincidunt a.

Nullam posuere feugiat tempus. Vestibulum euismod ipsum est, quis laoreet tellus consectetur at. Duis leo ante, finibus ac magna ut, convallis congue ligula. Praesent tincidunt, nunc ut fermentum rhoncus, tortor orci commodo augue, eget lacinia mi turpis sed nulla. Sed porta eget dolor sed bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi feugiat sapien ut ante pulvinar scelerisque. Proin euismod convallis tempus. Donec et enim sit amet lectus vestibulum congue nec vitae augue. Vivamus consectetur, turpis non suscipit euismod, quam neque rutrum ligula, ut eleifend justo turpis et magna. Suspendisse consequat tincidunt nisl. Proin enim diam, scelerisque et ultricies eget, laoreet id sem. Suspendisse venenatis tincidunt nunc ut sodales. Aenean maximus mi a metus ultricies iaculis ac sit amet dui.</p>
          </div>
          <div className="bg-blue-500 w-full h-fit mb-4">
            <p>Praesent felis dolor, aliquet a feugiat sed, placerat at orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque consectetur sem at tempus. Nunc porta ex a aliquam facilisis. Praesent et tincidunt nisi. Fusce volutpat libero aliquam, sodales metus eu, lobortis elit. Curabitur mattis in nibh in fermentum. Proin non dui luctus, ultrices tortor vitae, dapibus enim. Aenean vitae laoreet ante, at ullamcorper nibh. Phasellus dictum efficitur mi, in ullamcorper nisl tincidunt a.

Nullam posuere feugiat tempus. Vestibulum euismod ipsum est, quis laoreet tellus consectetur at. Duis leo ante, finibus ac magna ut, convallis congue ligula. Praesent tincidunt, nunc ut fermentum rhoncus, tortor orci commodo augue, eget lacinia mi turpis sed nulla. Sed porta eget dolor sed bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi feugiat sapien ut ante pulvinar scelerisque. Proin euismod convallis tempus. Donec et enim sit amet lectus vestibulum congue nec vitae augue. Vivamus consectetur, turpis non suscipit euismod, quam neque rutrum ligula, ut eleifend justo turpis et magna. Suspendisse consequat tincidunt nisl. Proin enim diam, scelerisque et ultricies eget, laoreet id sem. Suspendisse venenatis tincidunt nunc ut sodales. Aenean maximus mi a metus ultricies iaculis ac sit amet dui.</p>
          </div>
          <div className="bg-blue-500 w-full h-fit mb-4">
            <p>Praesent felis dolor, aliquet a feugiat sed, placerat at orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque consectetur sem at tempus. Nunc porta ex a aliquam facilisis. Praesent et tincidunt nisi. Fusce volutpat libero aliquam, sodales metus eu, lobortis elit. Curabitur mattis in nibh in fermentum. Proin non dui luctus, ultrices tortor vitae, dapibus enim. Aenean vitae laoreet ante, at ullamcorper nibh. Phasellus dictum efficitur mi, in ullamcorper nisl tincidunt a.

Nullam posuere feugiat tempus. Vestibulum euismod ipsum est, quis laoreet tellus consectetur at. Duis leo ante, finibus ac magna ut, convallis congue ligula. Praesent tincidunt, nunc ut fermentum rhoncus, tortor orci commodo augue, eget lacinia mi turpis sed nulla. Sed porta eget dolor sed bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi feugiat sapien ut ante pulvinar scelerisque. Proin euismod convallis tempus. Donec et enim sit amet lectus vestibulum congue nec vitae augue. Vivamus consectetur, turpis non suscipit euismod, quam neque rutrum ligula, ut eleifend justo turpis et magna. Suspendisse consequat tincidunt nisl. Proin enim diam, scelerisque et ultricies eget, laoreet id sem. Suspendisse venenatis tincidunt nunc ut sodales. Aenean maximus mi a metus ultricies iaculis ac sit amet dui.</p>
          </div>
      </div>
      <div className="bg-red-500 flex flex-col p-3 ml-3 w-1/3 h-fit">
        {/*Componente vagas novas*/}
        <div className="bg-blue-500 flex flex-col w-full h-full p-2 mb-6">
          <div className="bg-yellow-500 h-12 mb-2"></div>
          <div className="bg-yellow-500 h-12 mb-2"></div>
          <div className="bg-yellow-500 h-12 mb-2"></div>
          <div className="bg-yellow-500 h-12 mb-2"></div>
          <div className="bg-yellow-500 h-12 mb-2"></div>
        </div> 
        {/*Componente vagas se encerrando*/}
        <div className="bg-blue-500 flex flex-col w-full h-full p-2 mb-6">
          <div className="bg-yellow-500 h-12 mb-2"></div>
          <div className="bg-yellow-500 h-12 mb-2"></div>
          <div className="bg-yellow-500 h-12 mb-2"></div>
          <div className="bg-yellow-500 h-12 mb-2"></div>
          <div className="bg-yellow-500 h-12 mb-2"></div>
        </div> 
      </div>
    </main>
  );
}
