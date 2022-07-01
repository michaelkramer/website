import { createTheme, Link, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import { ConvertSyntax } from '../../Common/ConvertSyntax';
import { ROUTES, theme } from '../../constants';

export const GrpcCode = () => {

  return <ThemeProvider theme={createTheme(theme, {
    components: {
      MuiTypography: {
        defaultProps: {
          mb: 2
        }
      }
    }
  })}>
    <Typography variant='h3'>gRpc Code</Typography>
    <Typography variant="body1">
      So, you have a gRpc service that you need to connect to.  Now this code is copied from a client project so parts might be missing.  But it should get you started.
    </Typography>
    <Typography variant="body1">
      What is gRpc? <Link href="https://grpc.io/docs/what-is-grpc/introduction/" target="_blank" >https://grpc.io/docs/what-is-grpc/introduction/</Link>
    </Typography>
    <Typography variant="body1">
      You will need to make a gRpc Client. You can work with is just like a socket.io or rest, but that involves a lot of coding. We created a <strong>class</strong> which injests the gRpc Protobuf and exposes the services.
    </Typography>
    <Typography variant='h5'>
      Base class: <Link href={`${ROUTES.NOTES}/baseGrpcClient.ts`} target="_blank" >baseGrpcClient.ts</Link>
    </Typography>
    <Typography variant="body1">
      <ConvertSyntax url={`${ROUTES.BASEPATH_NOTE}/baseGrpcClient.ts`} slim />
    </Typography>
    <Typography variant='h5'>
      Interfaces and common functions: <Link href={`${ROUTES.NOTES}/grpcClient.ts`} target="_blank" >grpcClient.ts</Link>
    </Typography>
    <Typography variant="body1">
      <ConvertSyntax url={`${ROUTES.BASEPATH_NOTE}/grpcClient.ts`} slim />
    </Typography>

    <Typography variant="h4">Example:</Typography>
    <Typography variant="body1">
      Protobuff - This has 2 endpoints
      <ul>
        <li><strong>SayHello</strong>: similar to a rest endpoint.</li>
        <li><strong>Conversation</strong>: similar to a socket.io endpoint.</li>
      </ul>
      <ConvertSyntax url={`${ROUTES.BASEPATH_NOTE}/protos/Greeter.proto`} language={"protobuf"} slim />
    </Typography>
    <Typography variant="body1">
      I used typescript so, I like to convert the proto to interface to get the intelliSense to work. There is a package to convert this, <Link href="https://github.com/stephenh/ts-proto" target="_blank">ts-proto</Link> and <Link href="https://github.com/improbable-eng/ts-protoc-gen" target="_blank">ts-protoc-gen</Link>.  This bash script used to convert protobufs.
      <ConvertSyntax url={`${ROUTES.BASEPATH_NOTE}/convertProto.sh`} language={"bash"} slim />
    </Typography>
    <Typography variant="body1">
      The results:
      <ConvertSyntax url={`${ROUTES.BASEPATH_NOTE}/interfaces/Greeter.ts`} slim />
    </Typography>

    <Typography variant="body1">
      Now how to use the baseGrpcClient Class.
      <ConvertSyntax url={`${ROUTES.BASEPATH_NOTE}/GreeterClient.ts`} slim />
    </Typography>
  </ThemeProvider>
};
