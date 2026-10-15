import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  Max,
  Min,
  ValidateIf,
} from 'class-validator';

const hasDatabaseUrl = (o: Database): boolean =>
  typeof o.DB_URL === 'string' && o.DB_URL.length > 0;

export class Database {
  @ValidateIf((o: Database) => !hasDatabaseUrl(o))
  @IsString()
  @IsNotEmpty()
  DB_HOST?: string;

  @ValidateIf((o: Database) => !hasDatabaseUrl(o))
  @IsNumber()
  @Min(0)
  @Max(65535)
  DB_PORT?: number;

  @ValidateIf((o: Database) => !hasDatabaseUrl(o))
  @IsString()
  @IsNotEmpty()
  DB_USER?: string;

  @ValidateIf((o: Database) => !hasDatabaseUrl(o))
  @IsString()
  @IsNotEmpty()
  DB_PASS?: string;

  @ValidateIf((o: Database) => !hasDatabaseUrl(o))
  @IsString()
  @IsNotEmpty()
  DB_NAME?: string;

  @ValidateIf(hasDatabaseUrl)
  @IsString()
  @IsUrl({ require_tld: false, protocols: ['postgresql'] })
  DB_URL?: string;
}
