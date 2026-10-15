import { IsNumber, Max, Min } from 'class-validator';

export class Application {
  @IsNumber()
  @Min(0)
  @Max(65535)
  PORT: number;
}
