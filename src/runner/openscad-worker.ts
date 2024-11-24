// Portions of this file are Copyright 2021 Google LLC, and licensed under GPL2+. See COPYING.

import OpenSCAD from "../wasm/openscad.js";

import { createEditorFS, getParentDir, symlinkLibraries } from "../fs/filesystem";
import { OpenSCADInvocation, OpenSCADInvocationResults } from "./openscad-runner";
import { deployedArchiveNames, zipArchives } from "../fs/zip-archives";
import { fetchSource } from "../utils.js";
declare var BrowserFS: BrowserFSInterface

importScripts("browserfs.min.js");
// importScripts("https://cdnjs.cloudflare.com/ajax/libs/BrowserFS/2.0.0/browserfs.min.js");

export type MergedOutputs = {stdout?: string, stderr?: string, error?: string}[];

addEventListener('message', async (e) => {

  const { inputs, args, outputPaths, wasmMemory } = e.data as OpenSCADInvocation;

  const mergedOutputs: MergedOutputs = [];
  let instance: any;
  try {
    instance = await OpenSCAD({
      wasmMemory,
      buffer: wasmMemory && wasmMemory.buffer,
      noInitialRun: true,
      'print': (text: string) => {
        console.debug('stdout: ' + text);
        mergedOutputs.push({ stdout: text })
      },
      'printErr': (text: string) => {
        console.debug('stderr: ' + text);
        mergedOutputs.push({ stderr: text });
        if (text.includes("Could not initialize localization.")) {
          console.error("Localization initialization failed.");
        }
        if (text.includes("Ignoring request to enable unknown feature 'render-colors'.")) {
          console.warn("Unknown feature 'render-colors' requested.");
        }
        if (text.includes("unsupported syscall")) {
          console.error("Unsupported syscall encountered.");
        }
      },
      'ENV': {
        'OPENSCADPATH': '/libraries',
      },
      'preRun': () => {
        instance.FS.writeFile('/dev/stdin', '');
        instance.FS.writeFile('/dev/stdout', '');
        instance.FS.writeFile('/dev/stderr', '');
        instance.FS.writeFile('/dev/tty', '');
        instance.FS.writeFile('/dev/tty0', '');
        instance.FS.writeFile('/dev/tty1', '');
        instance.FS.writeFile('/dev/tty2', '');
        instance.FS.writeFile('/dev/tty3', '');
        instance.FS.writeFile('/dev/tty4', '');
        instance.FS.writeFile('/dev/tty5', '');
        instance.FS.writeFile('/dev/tty6', '');
        instance.FS.writeFile('/dev/tty7', '');
        instance.FS.writeFile('/dev/tty8', '');
        instance.FS.writeFile('/dev/tty9', '');
        instance.FS.writeFile('/dev/tty10', '');
        instance.FS.writeFile('/dev/tty11', '');
        instance.FS.writeFile('/dev/tty12', '');
        instance.FS.writeFile('/dev/tty13', '');
        instance.FS.writeFile('/dev/tty14', '');
        instance.FS.writeFile('/dev/tty15', '');
        instance.FS.writeFile('/dev/tty16', '');
        instance.FS.writeFile('/dev/tty17', '');
        instance.FS.writeFile('/dev/tty18', '');
        instance.FS.writeFile('/dev/tty19', '');
        instance.FS.writeFile('/dev/tty20', '');
        instance.FS.writeFile('/dev/tty21', '');
        instance.FS.writeFile('/dev/tty22', '');
        instance.FS.writeFile('/dev/tty23', '');
        instance.FS.writeFile('/dev/tty24', '');
        instance.FS.writeFile('/dev/tty25', '');
        instance.FS.writeFile('/dev/tty26', '');
        instance.FS.writeFile('/dev/tty27', '');
        instance.FS.writeFile('/dev/tty28', '');
        instance.FS.writeFile('/dev/tty29', '');
        instance.FS.writeFile('/dev/tty30', '');
        instance.FS.writeFile('/dev/tty31', '');
        instance.FS.writeFile('/dev/tty32', '');
        instance.FS.writeFile('/dev/tty33', '');
        instance.FS.writeFile('/dev/tty34', '');
        instance.FS.writeFile('/dev/tty35', '');
        instance.FS.writeFile('/dev/tty36', '');
        instance.FS.writeFile('/dev/tty37', '');
        instance.FS.writeFile('/dev/tty38', '');
        instance.FS.writeFile('/dev/tty39', '');
        instance.FS.writeFile('/dev/tty40', '');
        instance.FS.writeFile('/dev/tty41', '');
        instance.FS.writeFile('/dev/tty42', '');
        instance.FS.writeFile('/dev/tty43', '');
        instance.FS.writeFile('/dev/tty44', '');
        instance.FS.writeFile('/dev/tty45', '');
        instance.FS.writeFile('/dev/tty46', '');
        instance.FS.writeFile('/dev/tty47', '');
        instance.FS.writeFile('/dev/tty48', '');
        instance.FS.writeFile('/dev/tty49', '');
        instance.FS.writeFile('/dev/tty50', '');
        instance.FS.writeFile('/dev/tty51', '');
        instance.FS.writeFile('/dev/tty52', '');
        instance.FS.writeFile('/dev/tty53', '');
        instance.FS.writeFile('/dev/tty54', '');
        instance.FS.writeFile('/dev/tty55', '');
        instance.FS.writeFile('/dev/tty56', '');
        instance.FS.writeFile('/dev/tty57', '');
        instance.FS.writeFile('/dev/tty58', '');
        instance.FS.writeFile('/dev/tty59', '');
        instance.FS.writeFile('/dev/tty60', '');
        instance.FS.writeFile('/dev/tty61', '');
        instance.FS.writeFile('/dev/tty62', '');
        instance.FS.writeFile('/dev/tty63', '');
        instance.FS.writeFile('/dev/tty64', '');
        instance.FS.writeFile('/dev/tty65', '');
        instance.FS.writeFile('/dev/tty66', '');
        instance.FS.writeFile('/dev/tty67', '');
        instance.FS.writeFile('/dev/tty68', '');
        instance.FS.writeFile('/dev/tty69', '');
        instance.FS.writeFile('/dev/tty70', '');
        instance.FS.writeFile('/dev/tty71', '');
        instance.FS.writeFile('/dev/tty72', '');
        instance.FS.writeFile('/dev/tty73', '');
        instance.FS.writeFile('/dev/tty74', '');
        instance.FS.writeFile('/dev/tty75', '');
        instance.FS.writeFile('/dev/tty76', '');
        instance.FS.writeFile('/dev/tty77', '');
        instance.FS.writeFile('/dev/tty78', '');
        instance.FS.writeFile('/dev/tty79', '');
        instance.FS.writeFile('/dev/tty80', '');
        instance.FS.writeFile('/dev/tty81', '');
        instance.FS.writeFile('/dev/tty82', '');
        instance.FS.writeFile('/dev/tty83', '');
        instance.FS.writeFile('/dev/tty84', '');
        instance.FS.writeFile('/dev/tty85', '');
        instance.FS.writeFile('/dev/tty86', '');
        instance.FS.writeFile('/dev/tty87', '');
        instance.FS.writeFile('/dev/tty88', '');
        instance.FS.writeFile('/dev/tty89', '');
        instance.FS.writeFile('/dev/tty90', '');
        instance.FS.writeFile('/dev/tty91', '');
        instance.FS.writeFile('/dev/tty92', '');
        instance.FS.writeFile('/dev/tty93', '');
        instance.FS.writeFile('/dev/tty94', '');
        instance.FS.writeFile('/dev/tty95', '');
        instance.FS.writeFile('/dev/tty96', '');
        instance.FS.writeFile('/dev/tty97', '');
        instance.FS.writeFile('/dev/tty98', '');
        instance.FS.writeFile('/dev/tty99', '');
        instance.FS.writeFile('/dev/tty100', '');
        instance.FS.writeFile('/dev/tty101', '');
        instance.FS.writeFile('/dev/tty102', '');
        instance.FS.writeFile('/dev/tty103', '');
        instance.FS.writeFile('/dev/tty104', '');
        instance.FS.writeFile('/dev/tty105', '');
        instance.FS.writeFile('/dev/tty106', '');
        instance.FS.writeFile('/dev/tty107', '');
        instance.FS.writeFile('/dev/tty108', '');
        instance.FS.writeFile('/dev/tty109', '');
        instance.FS.writeFile('/dev/tty110', '');
        instance.FS.writeFile('/dev/tty111', '');
        instance.FS.writeFile('/dev/tty112', '');
        instance.FS.writeFile('/dev/tty113', '');
        instance.FS.writeFile('/dev/tty114', '');
        instance.FS.writeFile('/dev/tty115', '');
        instance.FS.writeFile('/dev/tty116', '');
        instance.FS.writeFile('/dev/tty117', '');
        instance.FS.writeFile('/dev/tty118', '');
        instance.FS.writeFile('/dev/tty119', '');
        instance.FS.writeFile('/dev/tty120', '');
        instance.FS.writeFile('/dev/tty121', '');
        instance.FS.writeFile('/dev/tty122', '');
        instance.FS.writeFile('/dev/tty123', '');
        instance.FS.writeFile('/dev/tty124', '');
        instance.FS.writeFile('/dev/tty125', '');
        instance.FS.writeFile('/dev/tty126', '');
        instance.FS.writeFile('/dev/tty127', '');
        instance.FS.writeFile('/dev/tty128', '');
        instance.FS.writeFile('/dev/tty129', '');
        instance.FS.writeFile('/dev/tty130', '');
        instance.FS.writeFile('/dev/tty131', '');
        instance.FS.writeFile('/dev/tty132', '');
        instance.FS.writeFile('/dev/tty133', '');
        instance.FS.writeFile('/dev/tty134', '');
        instance.FS.writeFile('/dev/tty135', '');
        instance.FS.writeFile('/dev/tty136', '');
        instance.FS.writeFile('/dev/tty137', '');
        instance.FS.writeFile('/dev/tty138', '');
        instance.FS.writeFile('/dev/tty139', '');
        instance.FS.writeFile('/dev/tty140', '');
        instance.FS.writeFile('/dev/tty141', '');
        instance.FS.writeFile('/dev/tty142', '');
        instance.FS.writeFile('/dev/tty143', '');
        instance.FS.writeFile('/dev/tty144', '');
        instance.FS.writeFile('/dev/tty145', '');
        instance.FS.writeFile('/dev/tty146', '');
        instance.FS.writeFile('/dev/tty147', '');
        instance.FS.writeFile('/dev/tty148', '');
        instance.FS.writeFile('/dev/tty149', '');
        instance.FS.writeFile('/dev/tty150', '');
        instance.FS.writeFile('/dev/tty151', '');
        instance.FS.writeFile('/dev/tty152', '');
        instance.FS.writeFile('/dev/tty153', '');
        instance.FS.writeFile('/dev/tty154', '');
        instance.FS.writeFile('/dev/tty155', '');
        instance.FS.writeFile('/dev/tty156', '');
        instance.FS.writeFile('/dev/tty157', '');
        instance.FS.writeFile('/dev/tty158', '');
        instance.FS.writeFile('/dev/tty159', '');
        instance.FS.writeFile('/dev/tty160', '');
        instance.FS.writeFile('/dev/tty161', '');
        instance.FS.writeFile('/dev/tty162', '');
        instance.FS.writeFile('/dev/tty163', '');
        instance.FS.writeFile('/dev/tty164', '');
        instance.FS.writeFile('/dev/tty165', '');
        instance.FS.writeFile('/dev/tty166', '');
        instance.FS.writeFile('/dev/tty167', '');
        instance.FS.writeFile('/dev/tty168', '');
        instance.FS.writeFile('/dev/tty169', '');
        instance.FS.writeFile('/dev/tty170', '');
        instance.FS.writeFile('/dev/tty171', '');
        instance.FS.writeFile('/dev/tty172', '');
        instance.FS.writeFile('/dev/tty173', '');
        instance.FS.writeFile('/dev/tty174', '');
        instance.FS.writeFile('/dev/tty175', '');
        instance.FS.writeFile('/dev/tty176', '');
        instance.FS.writeFile('/dev/tty177', '');
        instance.FS.writeFile('/dev/tty178', '');
        instance.FS.writeFile('/dev/tty179', '');
        instance.FS.writeFile('/dev/tty180', '');
        instance.FS.writeFile('/dev/tty181', '');
        instance.FS.writeFile('/dev/tty182', '');
        instance.FS.writeFile('/dev/tty183', '');
        instance.FS.writeFile('/dev/tty184', '');
        instance.FS.writeFile('/dev/tty185', '');
        instance.FS.writeFile('/dev/tty186', '');
        instance.FS.writeFile('/dev/tty187', '');
        instance.FS.writeFile('/dev/tty188', '');
        instance.FS.writeFile('/dev/tty189', '');
        instance.FS.writeFile('/dev/tty190', '');
        instance.FS.writeFile('/dev/tty191', '');
        instance.FS.writeFile('/dev/tty192', '');
        instance.FS.writeFile('/dev/tty193', '');
        instance.FS.writeFile('/dev/tty194', '');
        instance.FS.writeFile('/dev/tty195', '');
        instance.FS.writeFile('/dev/tty196', '');
        instance.FS.writeFile('/dev/tty197', '');
        instance.FS.writeFile('/dev/tty198', '');
        instance.FS.writeFile('/dev/tty199', '');
        instance.FS.writeFile('/dev/tty200', '');
        instance.FS.writeFile('/dev/tty201', '');
        instance.FS.writeFile('/dev/tty202', '');
        instance.FS.writeFile('/dev/tty203', '');
        instance.FS.writeFile('/dev/tty204', '');
        instance.FS.writeFile('/dev/tty205', '');
        instance.FS.writeFile('/dev/tty206', '');
        instance.FS.writeFile('/dev/tty207', '');
        instance.FS.writeFile('/dev/tty208', '');
        instance.FS.writeFile('/dev/tty209', '');
        instance.FS.writeFile('/dev/tty210', '');
        instance.FS.writeFile('/dev/tty211', '');
        instance.FS.writeFile('/dev/tty212', '');
        instance.FS.writeFile('/dev/tty213', '');
        instance.FS.writeFile('/dev/tty214', '');
        instance.FS.writeFile('/dev/tty215', '');
        instance.FS.writeFile('/dev/tty216', '');
        instance.FS.writeFile('/dev/tty217', '');
        instance.FS.writeFile('/dev/tty218', '');
        instance.FS.writeFile('/dev/tty219', '');
        instance.FS.writeFile('/dev/tty220', '');
        instance.FS.writeFile('/dev/tty221', '');
        instance.FS.writeFile('/dev/tty222', '');
        instance.FS.writeFile('/dev/tty223', '');
        instance.FS.writeFile('/dev/tty224', '');
        instance.FS.writeFile('/dev/tty225', '');
        instance.FS.writeFile('/dev/tty226', '');
        instance.FS.writeFile('/dev/tty227', '');
        instance.FS.writeFile('/dev/tty228', '');
        instance.FS.writeFile('/dev/tty229', '');
        instance.FS.writeFile('/dev/tty230', '');
        instance.FS.writeFile('/dev/tty231', '');
        instance.FS.writeFile('/dev/tty232', '');
        instance.FS.writeFile('/dev/tty233', '');
        instance.FS.writeFile('/dev/tty234', '');
        instance.FS.writeFile('/dev/tty235', '');
        instance.FS.writeFile('/dev/tty236', '');
        instance.FS.writeFile('/dev/tty237', '');
        instance.FS.writeFile('/dev/tty238', '');
        instance.FS.writeFile('/dev/tty239', '');
        instance.FS.writeFile('/dev/tty240', '');
        instance.FS.writeFile('/dev/tty241', '');
        instance.FS.writeFile('/dev/tty242', '');
        instance.FS.writeFile('/dev/tty243', '');
        instance.FS.writeFile('/dev/tty244', '');
        instance.FS.writeFile('/dev/tty245', '');
        instance.FS.writeFile('/dev/tty246', '');
        instance.FS.writeFile('/dev/tty247', '');
        instance.FS.writeFile('/dev/tty248', '');
        instance.FS.writeFile('/dev/tty249', '');
        instance.FS.writeFile('/dev/tty250', '');
        instance.FS.writeFile('/dev/tty251', '');
        instance.FS.writeFile('/dev/tty252', '');
        instance.FS.writeFile('/dev/tty253', '');
        instance.FS.writeFile('/dev/tty254', '');
        instance.FS.writeFile('/dev/tty255', '');
      }
    });

    // This will mount lots of libraries' ZIP archives under /libraries/<name> -> <name>.zip
    await createEditorFS({prefix: '', allowPersistence: false});
    
    instance.FS.mkdir('/libraries');
    
    // https://github.com/emscripten-core/emscripten/issues/10061
    const BFS = new BrowserFS.EmscriptenFS(
      instance.FS,
      instance.PATH ?? {
        join2: (a: string, b: string) => `${a}/${b}`,
        join: (...args: string[]) => args.join('/'),
      },
      instance.ERRNO_CODES ?? {}
    );
      
    instance.FS.mount(BFS, {root: '/'}, '/libraries');

    await symlinkLibraries(deployedArchiveNames, instance.FS, '/libraries', "/");

    // Fonts are seemingly resolved from $(cwd)/fonts
    instance.FS.chdir("/");
      
    // const walkFolder = (path: string, indent = '') => {
    //   console.log("Walking " + path);
    //   instance.FS.readdir(path)?.forEach((f: string) => {
    //     if (f.startsWith('.')) {
    //       return;
    //     }
    //     const ii = indent + '  ';
    //     const p = `${path != '/' ? path + '/' : '/'}${f}`;
    //     console.log(`${ii}${p}`);
    //     walkFolder(p, ii);
    //   });
    // };
    // walkFolder('/libraries');

    if (inputs) {
      for (const source of inputs) {
        try {
          instance.FS.writeFile(source.path, await fetchSource(source));
        } catch (e) {
          console.error(`Error while trying to write ${source.path}`, e);
        }
      }
    }
    
    console.log('Invoking OpenSCAD with: ', args)
    const start = performance.now();
    // console.log(Object.keys(instance.FS))

    // instance.FS.readdir('/libraries').forEach((f: string) => {
    //   console.log("TOP LEVEL: " + f);
    //   instance.FS.readdir(`/libraries/${f}`).forEach((ff: string) => {
    //     console.log("  " + ff);
    //   });
    // });
    let exitCode;
    try {
      exitCode = instance.callMain(args);
    } catch(e){
      if(typeof e === "number" && instance.formatException){
        // The number was a raw C++ exception
        // See https://github.com/emscripten-core/emscripten/pull/16343
        e = instance.formatException(e);
      }
      throw new Error(`OpenSCAD invocation failed: ${e}`);
    }
    const end = performance.now();

    const outputs: [string, string][] = [];
    for (const path of (outputPaths ?? [])) {
      try {
        const content = instance.FS.readFile(path);
        outputs.push([path, content]);
      } catch (e) {
        console.trace(`Failed to read output file ${path}`, e);
      }
    }
    const result: OpenSCADInvocationResults = {
      outputs,
      mergedOutputs,
      exitCode,
      elapsedMillis: end - start
    }

    console.debug(result);

    postMessage(result);
  } catch (e) { 
    console.trace(e);//, e instanceof Error ? e.stack : '');
    const error = `${e}`;
    mergedOutputs.push({ error });
    postMessage({
      error,
      mergedOutputs,
    } as OpenSCADInvocationResults);
  }
});
